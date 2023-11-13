import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardMessageComponent } from './card-message/card-message.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CardMessageComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CardMessageComponent,
  ]
})
export class CardMessageModule { }
