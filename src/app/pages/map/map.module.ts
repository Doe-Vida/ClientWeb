import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './pages/map/map.component';
import { Routes, RouterModule } from '@angular/router';
import { HospitalService } from 'src/app/common/services/hospital/hospital.service';

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
  ],
  providers:[
    HospitalService
  ]
})
export class MapModule { }
