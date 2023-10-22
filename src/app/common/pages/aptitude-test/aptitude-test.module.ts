import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AptitudeTestComponent } from './aptitude-test/aptitude-test.component';
import { BackToolbarModule } from '../../components/back-toolbar/back-toolbar.component.module';



@NgModule({
  declarations: [
    AptitudeTestComponent
  ],
  imports: [
    CommonModule,
    BackToolbarModule,
  ]
})
export class AptitudeTestModule { }
