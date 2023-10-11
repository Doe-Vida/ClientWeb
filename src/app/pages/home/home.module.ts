import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { BottonEditComponent } from './components/botton-edit/botton-edit.component';
import { EditarComponent } from './pages/editar/editar.component';
import { InputTextModule } from 'primeng/inputtext';

const routes: Routes = [
  {
    path: '', component: HomePageComponent, pathMatch: 'full'
  },
  {
    path: 'editar', component: EditarComponent
  }
]

@NgModule({
  declarations: [
    HomePageComponent,
    HeaderComponent,
    BodyComponent,
    BottonEditComponent,
    EditarComponent
  ],
  imports: [
    InputTextModule,
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
