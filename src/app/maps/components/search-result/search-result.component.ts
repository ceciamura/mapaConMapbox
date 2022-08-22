import { Component} from '@angular/core';
import { PlacesService } from '../../services/places.service';
import { Feature } from '../../interfaces/places';
import { MapService } from '../../services/map.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent {

  public selectedId: string = "";

  constructor(private placeService:PlacesService,
              private mapService:MapService) { }

  get isLoadingPlaces():Boolean{
    return this,this.placeService.isLoadingPlacs;
  }

  get places():Feature[]{
     return this.placeService.places;
  }

  flyTo(place:Feature){

    this.selectedId= place.id;
    
    const [lng, lat] = place.center;
    this.mapService.flyTo([lng,lat]);
  }
  getDirections(place:Feature){
    if(!this.placeService.userLocation) throw Error ('no hay userLocation');
    this.placeService.deletePlaces();

    const start = this.placeService.userLocation!;
    const end = place.center as [number, number];

    this.mapService.getRouterBetweenPoints(start,end)
  }
}
