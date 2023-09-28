import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ViewBookComponent} from "./view-book.component";


const routes: Routes = [
  {
    path: '',
    component: ViewBookComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewBookRoutingModule {}
