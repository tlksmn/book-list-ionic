import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ViewBookComponent} from "./view-book.component";
import {IonicModule} from "@ionic/angular";
import { FormsModule } from '@angular/forms';
import {ViewBookRoutingModule} from "./view-book-routing.module";
import {SharedModule} from "../../shared/shared.module";



@NgModule({
  declarations: [ViewBookComponent],
  imports: [
    CommonModule,
    IonicModule,
    ViewBookRoutingModule,
    FormsModule,
    SharedModule,
  ]
})
export class ViewBookModule { }
