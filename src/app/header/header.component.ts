import {Component, OnInit} from '@angular/core';
import {ChangeDetectorRef} from '@angular/core';
import {LocationDataService} from '../common/data-services/location-data.service';
import {UserService} from '../common/services/user.service';
import {Router, ActivatedRoute} from '@angular/router';

declare var $: any;
let self = this;


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    public city: any;
    logoutUrl: string;

    constructor(private cd: ChangeDetectorRef, private locationDataService: LocationDataService, public userService: UserService, private router: Router, private route: ActivatedRoute) {
        setTimeout(() => {
            this.city = localStorage.getItem('currentCity');
            this.cd.markForCheck();
        }, 3000);
    }

    ngOnInit() {
        this.locationDataService.getCurrentCity();
        this.logoutUrl = this.route.snapshot.queryParams['logoutUrl'] || 'splash';
    }

    logout(): any {
        this.userService.logout();
        this.router.navigate([this.logoutUrl]);
        return false;
    }

    ngAfterViewChecked() {
        $('.material-menu nav > ul').materialmenu({mobileWidth: 992});
    }

}
