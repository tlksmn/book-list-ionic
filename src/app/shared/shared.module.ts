import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderBackComponent} from "./header-back/header-back.component";
import {IonicModule} from "@ionic/angular";


@NgModule({
  declarations: [HeaderBackComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [HeaderBackComponent]
})
export class SharedModule {
}
