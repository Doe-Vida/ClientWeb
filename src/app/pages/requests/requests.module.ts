import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestsComponent } from './page/requests/requests.component';
import { RouterModule, Routes } from '@angular/router';
import { ButtonCommonModule } from 'src/app/common/components/button-common/button-common.module';


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
    ButtonCommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RequestsModule { }
