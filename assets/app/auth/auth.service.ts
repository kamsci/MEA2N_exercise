import { User } from './user';
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class AuthService {

    constructor(private _http: Http) {};

    signup(user: User) {
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-type': 'application/json'});

        return this._http.post('http://localhost:3000/user', body, {headers: headers})
            .map (response => response.json())
            .catch(error => Observable.throw(error.json()));
    }

    login(user: User) {
        const body = JSON.stringify(user);
        console.log("user body", body);
        const headers = new Headers({'Content-type': 'application/json'});

        return this._http.post('http://localhost:3000/user/login', body, {headers: headers})
            .map (response => response.json())
            .catch(error => Observable.throw(error.json()));
    }
}