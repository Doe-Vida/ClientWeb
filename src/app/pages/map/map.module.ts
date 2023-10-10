import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './pages/map/map.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: MapComponent, pathMatch: 'full',
  }
]

@NgModule({
  declarations: [
    MapComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MapModule { }
