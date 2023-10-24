import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonCommonComponent } from './button-common/button-common.component';



@NgModule({
  declarations: [
    ButtonCommonComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ButtonCommonComponent
  ]
})
export class ButtonCommonModule { }
