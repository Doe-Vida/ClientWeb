import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';

const routes: Routes = [
  {
    path: '', component: HomePageComponent, pathMatch: 'full'
  }
]

@NgModule({
  declarations: [
    HomePageComponent,
    HeaderComponent,
    BodyComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
