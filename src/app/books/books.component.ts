import {Component, inject, OnDestroy, OnInit} from '@angular/core';
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
  public bookFilterFormValues!: BookFilterFormValues

  public bookFilterForm = new FormGroup({
    author: new FormControl([]),
    year: new FormControl([]),
    pageCount: new FormControl([]),
    language: new FormControl([]),
    genre: new FormControl([]),
  })
  public bookSearchForm = new FormGroup({
    search: new FormControl('')
  })

  customAlertOptions = {
    header: 'Pizza Toppings',
    subHeader: 'Select your favorite topping',
    message: 'Choose only one',
    translucent: true,
  };

  ngOnInit() {
    this.books = this.dataService.getBooks();
    this.bookFilterFormValues = {
      author: [...new Set(this.books.map(e => e.author).flat().filter(e => e && e.length > 1))],
      year: [...new Set(this.books.map(e => e.year!).filter(e => e && e > 1).sort((a, b) => a - b))],
      pageCount: [...new Set(this.books.map(e => e.pageCount).filter(e => e && e > 1).sort((a, b) => a - b))],
      language: [...new Set(this.books.map(e => e.language).filter(e => e && e.length > 1))],
      genre: [...new Set(this.books.map(e => e.genre).filter(e => e && e.length > 1))],
    }
    this.bookFilterForm.valueChanges
      .pipe(
        tap(console.log),
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
                  || (Array.isArray(e.author) && e.author.filter(author => author.toLowerCase().includes(value.search!.toLowerCase())))
                  || (typeof (e.author) === "string" && e.author.toLowerCase().includes(value.search!.toLowerCase()))
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
