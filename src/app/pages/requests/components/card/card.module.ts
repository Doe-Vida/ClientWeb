import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { PipeModule } from 'src/app/common/pipe/pipe.module';



@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule,
    PipeModule
  ],
  exports: [
    CardComponent
  ]
})
export class CardModule { }
