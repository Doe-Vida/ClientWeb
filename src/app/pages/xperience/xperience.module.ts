import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XperienceComponent } from './pages/xperience/xperience.component';
import { RouterModule, Routes } from '@angular/router';
import { BackToolbarModule } from 'src/app/common/components/back-toolbar/back-toolbar.component.module';
import { CardComponent } from './components/card/card.component';
import { AddXperienceComponent } from './pages/add-xperience/add-xperience.component';
import { ButtonCommonModule } from 'src/app/common/components/button-common/button-common.module';

const routes: Routes = [
  {
    path: '', component: XperienceComponent, pathMatch: 'full',
  },{
    path: 'add', component: AddXperienceComponent
  }
]

@NgModule({
  declarations: [
    XperienceComponent,
    CardComponent,
    AddXperienceComponent
  ],
  imports: [
    CommonModule,
    BackToolbarModule,
    ButtonCommonModule,
    RouterModule.forChild(routes)
  ]
})
export class XperienceModule { }
