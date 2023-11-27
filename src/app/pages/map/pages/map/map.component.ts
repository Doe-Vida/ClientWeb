import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet'
import { HospitalsMapPositions } from '../../shared/models/hospitals.model';
import { HospitalsMapPositionService } from '../../shared/service/hospitalsMapPosition.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit{
  map: any
  markers: any
  hospitals: HospitalsMapPositions[] = new Array<HospitalsMapPositions>();

  constructor(
    private readonly serviceMock: HospitalsMapPositionService
  ) { }

  ngOnInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.hospitals = this.serviceMock.getAllHospitalsPosition();
    this.hospitals.forEach((hospital) => {
      this.map = L.map('map').setView([-22.8683668, -47.0392479], 3);
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
      }).addTo(this.map);
  
      //adicionando marcadores
      this.markers = L.marker([hospital.position.latitude,hospital.position.longitude]).addTo(this.map)
      .bindPopup(`<b>${hospital.infoWindow.snippet}</b><br>${hospital.infoWindow.title}`)
    })
  }
}
