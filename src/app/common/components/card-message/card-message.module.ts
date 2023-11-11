import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardMessageComponent } from './card-message/card-message.component';



@NgModule({
  declarations: [
    CardMessageComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CardMessageComponent,
  ]
})
export class CardMessageModule { }
