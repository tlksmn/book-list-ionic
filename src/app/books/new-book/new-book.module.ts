import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NewBookRoutingModule} from "./new-book-routing.module";
import {NewBookComponent} from "./new-book.component";
import {SharedModule} from "../../shared/shared.module";
import {IonicModule} from "@ionic/angular";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [NewBookComponent],
  imports: [
    CommonModule,
    NewBookRoutingModule,
    SharedModule,
    IonicModule,
    ReactiveFormsModule
  ]
})
export class NewBookModule {
}
