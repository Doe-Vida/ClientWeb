import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonCommonComponent } from './button-common/button-common.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ButtonCommonComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    ButtonCommonComponent
  ]
})
export class ButtonCommonModule { }
