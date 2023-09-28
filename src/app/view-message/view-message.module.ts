import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ViewMessagePage } from './view-message.page';

import { IonicModule } from '@ionic/angular';

import { ViewMessagePageRoutingModule } from './view-message-routing.module';

@NgModule({
  declarations: [ViewMessagePage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewMessagePageRoutingModule
  ],
})
export class ViewMessagePageModule {}
