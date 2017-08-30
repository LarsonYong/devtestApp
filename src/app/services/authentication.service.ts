import { AppState } from '../app.service';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationService {
    constructor(private http: Http) {
    }
    login(username: string, password: string) {
        return this.http.post('/api/users/authenticate', { 'username': username, 'password': password} )
            .map((response: Response) => {
                const user = response.json();
                if (user) {
                        localStorage.setItem('currentUser', JSON.stringify(user));
                }
                return user;
            });
    }
    static logout() {
        localStorage.removeItem('currentUser');
    }
    static isloggedin() {
        return localStorage.getItem('currentUser');
    }
}

export function isloggedin() {
    return !!localStorage.getItem('currentUser');
}

export function logout() {
    localStorage.removeItem('currentUser');
}

