import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../../services/places.service';
import { MapService } from '../../services/map.service';

@Component({
  selector: 'app-btn-my-location',
  templateUrl: './btn-my-location.component.html',
  styleUrls: ['./btn-my-location.component.css']
})
export class BtnMyLocationComponent implements OnInit {

  constructor( private placesService: PlacesService,
               private mapService: MapService) { }

  ngOnInit(): void {
  }


  mylocation(){
    if(!this.placesService.isUserLocationReady) throw Error ('No hay ubicacionde usuario');
    if(!this.mapService) throw Error ('No hay mapa disponible');

    this.mapService.flyTo(this.placesService.userLocation!);
  }
}
