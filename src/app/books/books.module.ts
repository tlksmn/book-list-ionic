import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BooksComponent} from "./books.component";
import {FormsModule} from "@angular/forms";
import {IonicModule} from "@ionic/angular";
import {RouterModule} from "@angular/router";
import {BooksRoutingModule} from "./books-routing.module";


@NgModule({
  declarations: [BooksComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule,
    BooksRoutingModule
  ]
})
export class BooksModule {
}
