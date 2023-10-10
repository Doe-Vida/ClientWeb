import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XperienceComponent } from './pages/xperience/xperience.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: XperienceComponent, pathMatch: 'full',
  }
]

@NgModule({
  declarations: [
    XperienceComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class XperienceModule { }
