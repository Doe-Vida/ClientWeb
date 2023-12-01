import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XperienceComponent } from './pages/xperience/xperience.component';
import { RouterModule, Routes } from '@angular/router';
import { BackToolbarModule } from 'src/app/common/components/back-toolbar/back-toolbar.component.module';
import { CardComponent } from './components/card/card.component';

const routes: Routes = [
  {
    path: '', component: XperienceComponent, pathMatch: 'full',
  }
]

@NgModule({
  declarations: [
    XperienceComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    BackToolbarModule,
    RouterModule.forChild(routes)
  ]
})
export class XperienceModule { }
