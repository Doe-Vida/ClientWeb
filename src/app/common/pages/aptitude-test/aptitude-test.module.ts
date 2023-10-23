import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AptitudeTestComponent } from './aptitude-test/aptitude-test.component';
import { BackToolbarModule } from '../../components/back-toolbar/back-toolbar.component.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: AptitudeTestComponent
  },
]

@NgModule({
  declarations: [
    AptitudeTestComponent
  ],
  imports: [
    CommonModule,
    BackToolbarModule,
    RouterModule.forChild(routes)
  ]
})
export class AptitudeTestModule { }
