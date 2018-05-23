
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map'
declare var google: any;

@Injectable()
export class LocationDataService {


  constructor() {}

   getCurrentCity() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (p) {
        var latlng = new google.maps.LatLng(p.coords.latitude, p.coords.longitude);
        var geocoder = geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'latLng': latlng }, function (results, status) {
          if (status == google.maps.GeocoderStatus.OK) {
            if (results[0]) {
              var add = results[0].formatted_address;
              var value = add.split(",");
              var count = value.length;
              var country = value[count - 1];
              var state = value[count - 2];
              var state1 = state.replace(/\d+/g, '');
              var city = value[count - 3];
              localStorage.setItem('currentCity', city);
            }
          }
          else {
            alert('error');

          }

        });
      });

    }
    else {
      alert('Geo Location feature is not supported in this browser.');
    }
  }

  

 



}
