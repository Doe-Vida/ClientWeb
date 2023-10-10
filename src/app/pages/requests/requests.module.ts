import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestsComponent } from './page/requests/requests.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '', component: RequestsComponent, pathMatch: 'full',
  }
]

@NgModule({
  declarations: [
    RequestsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RequestsModule { }
