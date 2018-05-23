import {Component, OnInit} from '@angular/core';
import {UserService} from '../common/services/user.service';
import {Router, ActivatedRoute} from '@angular/router';

declare var jquery: any;
declare var $: any;

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
    message: string;
    returnUrl: string;

    constructor(public userService: UserService, private router: Router, private route: ActivatedRoute) {
        this.message = '';
    }

    ngOnInit() {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'home';
    }

    signUp(username: string, emailId: string, password: string) {
        this.message = '';
        this.userService.signUp(username, emailId, password)
            .subscribe(
                data => {
                    if (data.Status) {
                        localStorage.setItem('currentUser', data.Uniqueid);
                        $('#signupModal').modal('hide');
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
