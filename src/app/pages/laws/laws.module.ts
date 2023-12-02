import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LawsComponent } from './pages/laws/laws.component';
import { Routes, RouterModule } from '@angular/router';
import { BackToolbarModule } from 'src/app/common/components/back-toolbar/back-toolbar.component.module';
import { CardComponent } from './components/card/card.component';

const routes: Routes = [
  {
    path: '', component: LawsComponent, pathMatch: 'full',
  }
]

@NgModule({
  declarations: [
    LawsComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    BackToolbarModule,
    RouterModule.forChild(routes)
  ]
})
export class LawsModule { }
