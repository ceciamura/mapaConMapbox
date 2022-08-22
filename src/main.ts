import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';


import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
mapboxgl.accessToken = 'pk.eyJ1IjoiY2VjaWFtdXJhIiwiYSI6ImNsNjd5ZnRzZDB1cngzY25uNHhhZWpmNjUifQ.Nflqq8k1_QBal1GBxkfojg';


if(!navigator.geolocation){
  alert("Navegador no soporta la geolocation");
  throw new Error( 'Navegador no soporta la geolocation' );
}

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
