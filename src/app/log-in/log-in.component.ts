import {Component, OnInit} from '@angular/core';
import {UserService} from '../common/services/user.service';
import {Router, ActivatedRoute} from '@angular/router';

declare var jquery: any;
declare var $: any;

@Component({
    selector: 'app-log-in',
    templateUrl: './log-in.component.html',
    styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
    message: string;
    returnUrl: string;

    constructor(public userService: UserService, private router: Router, private route: ActivatedRoute) {
        this.message = '';
    }

    ngOnInit() {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'home';
    }

    login(emailId: string, password: string) {
        this.message = '';
        this.userService.login(emailId, password)
            .subscribe(
                data => {
                    if (data.Status) {
                        localStorage.setItem('currentUser', data.Uniqueid);
                        $('#logInModal').modal('hide');
                        this.router.navigate([this.returnUrl]);
                        console.log(data);
                    } else {
                        this.message = data.message;
                    }

                },
                error => {
                    console.log(error);
                });
    }
}
