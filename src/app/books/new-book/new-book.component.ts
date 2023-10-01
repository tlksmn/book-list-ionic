import {Component, inject, OnInit} from '@angular/core';
import {BookElem, DataService} from "../../services/data.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.scss'],
})
export class NewBookComponent implements OnInit {
  private readonly dataService: DataService = inject(DataService);
  createdBook: boolean = false;
  secondToShow: number = 5_000;
  errorMessageShow: boolean = false;

  public newBookForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    author: new FormControl('', [Validators.required, Validators.minLength(3)]),
    description: new FormControl('', [Validators.required, Validators.minLength(3)]),
    language: new FormControl('russian', [Validators.required, Validators.minLength(2)]),
    genre: new FormControl('classic', [Validators.required, Validators.minLength(1)]),
    pageCount: new FormControl(10, [Validators.required, Validators.min(1)]),
    year: new FormControl(2023, [Validators.required, Validators.min(1)]),
  })

  ngOnInit() {
  }

  submitForm() {
    if (this.newBookForm.valid) {
      this.dataService.addNewBook(this.newBookForm.value as BookElem)
      this.createdBook = true;
    } else {
      this.errorMessageShow = true;
      setTimeout(() => {
        this.errorMessageShow = false;
      }, this.secondToShow / 1.5)
    }
  }

}
