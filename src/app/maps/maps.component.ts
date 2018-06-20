import { Component, OnInit } from '@angular/core';
import { icon, latLng, marker, polyline, tileLayer, circleMarker, polygon, circle } from 'leaflet';
@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
     
      };

      googleMaps = tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
        maxZoom: 20,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
        detectRetina: true
      });
      googleHybrid = tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {
        maxZoom: 20,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
        detectRetina: true
      });
    
      spot = marker([ 29.938801, -95.340056 ], {
        icon: icon({
          iconSize: [ 25, 41 ],
          iconAnchor: [ 13, 41 ],
          iconUrl: '/assets/img/markers/marker-icon-violet.png',
          shadowUrl: '/assets/img/markers/marker-shadow.png'
        })
        });
    
        spot2 = circleMarker([29.938801, -95.340056]);
    
      
      
      layersControl = {
        baseLayers: {
          'Google Maps': this.googleMaps,
          'Google Hybrid': this.googleHybrid
        },
        overlays: {
          'Over Here': this.spot,
         
        }
      };

      options = {
        layers: [ this.spot, this.spot2, polygon([[ 46.8, -121.85 ], [ 46.92, -121.92 ], [ 46.87, -121.8 ]]), circle([ 46.95, -122 ], { radius:10000 }),
          
          tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
            maxZoom: 20,
            subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
            detectRetina: true
            
          })
          
        ],
       
        zoom: 7,
        center: latLng([ 29.7604 , -95.3698 ])
      };
    
    }