import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UserService {
    // private customersUrl = 'http://localhost/citimelaapi/communities';
    private customersUrl = 'http://citimela.com/api/communities/';
    constructor(private router: Router, private http: HttpClient) {
    }

    login(emailId: string, password: string): any {
        return this.http.post<any>(this.customersUrl + '/getUser', {
            Email: emailId,
            Password: password
        })
            .map(res => {
                return res;
            });
    }

    signUp(username: string, emailId: string, password: string): any {
        return this.http.post<any>(this.customersUrl + '/postUserData', {
            Username: username,
            Email: emailId,
            Password: password,
            TblLocationLocationid: 1
        })
            .map(res => {
                return res;
            });
    }

    getUser(): any {
        return localStorage.getItem('currentUser');
    }

    isLoggedIn(): boolean {
        return this.getUser() != null;
    }

    logout(): any {
        localStorage.removeItem('currentUser');
    }
}
