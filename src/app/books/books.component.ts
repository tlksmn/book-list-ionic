import {Component, inject, OnInit} from '@angular/core';
import {BookElem, DataService} from "../services/data.service";
import {Platform} from "@ionic/angular";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  private readonly dataService: DataService = inject(DataService);
  public books: BookElem[] = []

  ngOnInit() {
    console.log('inserted')
    this.books = this.dataService.getBooks();
  }

  customAlertOptions = {
    header: 'Pizza Toppings',
    subHeader: 'Select your favorite topping',
    message: 'Choose only one',
    translucent: true,
  };
}
