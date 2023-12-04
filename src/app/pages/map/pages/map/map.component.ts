import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet'
import { BaseResult } from 'src/app/common/models/BaseResult';
import { Subscription } from 'rxjs';
import { HospitalService } from 'src/app/common/services/hospital/hospital.service';
import { Hospital } from 'src/app/common/models/Hospital/hospital';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit{
  map: any
  markers: any
  hospitals = new Array<Hospital>();
  private unsubscribe = new Array<Subscription>();

  constructor(
    private _hospitalService: HospitalService,
  ) { }

  ngOnInit(): void {
    this.loadHospitalList();
  }

  loadHospitalList(): void{
    const sub = this._hospitalService.getAll().subscribe((result: BaseResult) => {
      result.success ? this.hospitals = result.data : this.hospitals = [];
      this.initMap()
    });
    this.unsubscribe.push(sub)
  }

  private initMap(): void {
    this.map = L.map('map').setView([-22.8683668, -47.0392479], 3);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      minZoom: 3
    }).addTo(this.map);
    if(this.hospitals.length > 0){
      this.hospitals.forEach((hospital) => {
        if(hospital.latitude && hospital.longitude){
          this.markers = L.marker([hospital.latitude,hospital.longitude]).addTo(this.map)
        .bindPopup(`<b>${hospital.city_name}</b><br>${hospital.hospital_name}`)
        }
      })
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}
