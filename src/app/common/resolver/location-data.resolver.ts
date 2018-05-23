import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Rx";
import {Injectable} from "@angular/core";
import {LocationDataService} from "../data-services/location-data.service";

@Injectable()
export class LocationDataResolver implements Resolve<any>{

    constructor(private locationDataService: LocationDataService) {

    }

    public latitude: number;
    public longitude: number;

    resolve(router: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        //Latitude:13.003267
        //Longitude: 80.2040
        /*   navigator.geolocation.getCurrentPosition(position => {
               this.longitude = position.coords.longitude;
               this.latitude = position.coords.latitude;
               localStorage.setItem("lan", String(position.coords.longitude));
               localStorage.setItem("lat", String(position.coords.latitude));
           });
        
        this.setLocation();
        if (this.latitude && this.longitude) {
            return this.locationDataService.getGeoLocation(this.latitude, this.longitude);

        }
        else {
            this.setLocation();
            if (this.latitude && this.longitude) {
                return this.locationDataService.getGeoLocation(this.latitude, this.longitude);
            }

        }*/
       return null;
        //return this.getGeoLocationService(this.latitude, this.longitude);
        //setTimeout(function () {
        //  return this.locationDataService.getGeoLocation("13.003267", "80.2040");
        // }, 1000);
    }



/*    setLocation() {
        navigator.geolocation.getCurrentPosition(position => {
            this.longitude = position.coords.longitude;
            this.latitude = position.coords.latitude;
            localStorage.setItem("lan", String(position.coords.longitude));
            localStorage.setItem("lat", String(position.coords.latitude));
        });
    }

    getGeoLocationService(lat: number, lan: number): any {
        setTimeout(function () {
            return this.locationDataService.getGeoLocation(localStorage.getItem("lat"), localStorage.getItem("lan"));
        }, 5000);

    }*/

}
