import {Component, inject, OnInit} from '@angular/core';
import {BookElem, DataService} from "../../services/data.service";
import {ActivatedRoute} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.scss'],
})
export class ViewBookComponent implements OnInit {
  private readonly dataService: DataService = inject(DataService)
  private readonly activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  public currentBook!: BookElem;
  editBookMode: boolean = false;
  public editBookForm: any;

  submitForm() {
    if (this.editBookForm.valid) {
      this.dataService.editBook({...this.editBookForm.value as BookElem, id: this.currentBook.id})
    }
  }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.currentBook = this.dataService.getBookById(parseInt(id, 10));

    this.editBookForm = new FormGroup({
      name: new FormControl(this.currentBook.name, [Validators.required, Validators.minLength(3)]),
      author: new FormControl(this.currentBook.author, [Validators.required, Validators.minLength(3)]),
      description: new FormControl(this.currentBook.description, [Validators.required, Validators.minLength(3)]),
      language: new FormControl(this.currentBook.language, [Validators.required, Validators.minLength(2)]),
      genre: new FormControl(this.currentBook.genre, [Validators.required, Validators.minLength(1)]),
      pageCount: new FormControl(this.currentBook.pageCount, [Validators.required, Validators.min(1)]),
      year: new FormControl(this.currentBook.year, [Validators.required, Validators.min(1)]),
    })
  }
}
