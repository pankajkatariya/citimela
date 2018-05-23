import {ChangeDetectorRef} from '@angular/core';
import {Component, OnInit} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {LocationDataService} from './../common/data-services/location-data.service';
import {ActivatedRoute} from '@angular/router';

declare var google: any;

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    providers: []
})
export class HomeComponent implements OnInit {

    public city: any;
    public error: string;
    public location: any;
    public currentLocation: any;

    constructor() {
    }

    ngOnInit() {

    }

    ngAfterViewInit() {

    }


}
