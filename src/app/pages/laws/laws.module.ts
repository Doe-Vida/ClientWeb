import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LawsComponent } from './pages/laws/laws.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: LawsComponent, pathMatch: 'full',
  }
]

@NgModule({
  declarations: [
    LawsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LawsModule { }
