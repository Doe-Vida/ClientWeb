import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet'

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit{
  map: any
  markers: any

  constructor() { }

  ngOnInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map').setView([-22.8683668, -47.0392479], 3);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
    }).addTo(this.map);

    //adicionando marcadores
    this.markers = L.marker([-22.8683668, -47.0392479]).addTo(this.map)
    .bindPopup('<b>Hospital</b><br>Nome do hospital')
  }
}
