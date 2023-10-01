import {ChangeDetectorRef, Component, inject, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {BookElem, DataService} from "../services/data.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Subject, takeUntil, tap} from "rxjs";
import {Router} from "@angular/router";

interface BookFilterFormValues {
  author: string[];
  year: number[]
  pageCount: number[]
  language: string[]
  genre: string[]
}

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit, OnDestroy {
  private readonly dataService: DataService = inject(DataService);
  private readonly router: Router = inject(Router);
  private destroy$: Subject<boolean> = new Subject<boolean>();
  public books: BookElem[] = [];
  public bookFilterFormValues!: BookFilterFormValues;

  public bookFilterForm = new FormGroup({
    author: new FormControl(['']),
    year: new FormControl([0]),
    pageCount: new FormControl([0]),
    language: new FormControl(['']),
    genre: new FormControl(['']),
  })
  public bookSearchForm = new FormGroup({
    search: new FormControl('')
  })

  authorAlertOptions = {
    header: 'Authors toppings',
    subHeader: 'Select your needed authors',
    message: 'Choose any options',
    translucent: true,
  };
  
  yearAlertOptions = {
    header: 'Years toppings',
    subHeader: 'Select your needed years',
    message: 'Choose any options, if its more then one, then select between first and last values books',
    translucent: true,
  };

  pageCountAlertOptions = {
    header: 'Years toppings',
    subHeader: 'Select your needed years',
    message: 'Choose any options, if its more then one, then select between first and last values books',
    translucent: true,
  };

  languageAlertOptions = {
    header: 'Book language toppings',
    subHeader: 'Select your needed languages',
    message: 'Choose any options',
    translucent: true,
  };

  genreAlertOptions = {
    header: 'Genre toppings',
    subHeader: 'Select your needed genre',
    message: 'Choose any options',
    translucent: true,
  };

  ngOnInit() {
    this.books = this.dataService.getBooks();
    this.bookFilterFormValues = this.calcBookFilter();
    this.bookFilterForm.valueChanges
      .pipe(
        tap((value) => {
          let temp: BookElem[] = this.dataService.getBooks()
          if (value?.author && value.author.length > 0) {
            temp = temp.filter(e => value.author!.includes(e.author))
          }
          if (value?.genre && value.genre.length > 0) {
            temp = temp.filter(e => value.genre!.includes(e.genre))
          }
          if (value?.language && value.language.length > 0) {
            temp = temp.filter(e => value.language!.includes(e.language))
          }
          if (value?.pageCount && value.pageCount.length > 0) {
            if (value.pageCount!.length >= 2) {
              temp = temp.filter(e => e.pageCount && (e.pageCount <= value.pageCount![value.pageCount!.length - 1]) && (e.pageCount >= value.pageCount![0]))
              console.log(temp)
            }
            temp = temp.filter(e => e.pageCount && (e.pageCount >= value.pageCount![0]))
          }
          if (value?.year && value.year.length > 0) {
            if (value.year!.length >= 2) {
              temp = temp.filter(e => e.year && (e.year <= value.year![value.year!.length - 1]) && (e.year >= value.year![0]))
            }
            temp = temp.filter(e => {
              return e.year && (e.year >= value.year![0])
            })
          }
          this.books = temp;
        }),
        takeUntil(this.destroy$)
      )
      .subscribe()

    this.bookSearchForm.valueChanges
      .pipe(
        tap((value) => {
          if (value.search && value.search?.length > 0) {
            this.books = this.dataService.getBooks()
              .filter(e =>
                (e.name.toLowerCase().includes(value.search?.toLowerCase()!)
                  || e.author.toLowerCase().includes(value.search!.toLowerCase())
                  || e.description?.toLowerCase().includes(value.search!.toLowerCase())
                )
              )
          } else {
            this.books = this.dataService.getBooks()
          }
        }),
        takeUntil(this.destroy$)
      )
      .subscribe()
    this.resetBookFilterForm();
    this.dataService.detectChange$.pipe(
      tap(() => {
        this.bookFilterFormValues = this.calcBookFilter()
      }),
      takeUntil(this.destroy$)
    ).subscribe()
  }

  private calcBookFilter() {
    return ({
      author: [...new Set(this.books.map(e => e.author).flat().filter(e => e && e.length > 1))],
      year: [...new Set(this.books.map(e => e.year!).filter(e => e && e > 1).sort((a, b) => a - b))],
      pageCount: [...new Set(this.books.map(e => e.pageCount).filter(e => e && e > 1).sort((a, b) => a - b))],
      language: [...new Set(this.books.map(e => e.language).filter(e => e && e.length > 1))],
      genre: [...new Set(this.books.map(e => e.genre).filter(e => e && e.length > 1))],
    })
  }

  resetBookFilterForm() {
    this.bookFilterForm.reset()
  }

  async goToNewBookPage() {
    await this.router.navigate(['books/create'])
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe()
  }
}
