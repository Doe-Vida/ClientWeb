import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomDataFormatPipe } from './custom-data-format.pipe';



@NgModule({
  declarations: [CustomDataFormatPipe],
  imports: [
    CommonModule
  ],
  exports:[
    CustomDataFormatPipe
  ]
})
export class PipeModule { }
