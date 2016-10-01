import { Component } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES } from '@angular/router';

import { SignupComponent } from './signup.componenet';
import { LoginComponent } from './login.componenet';
import { LogoutComponent } from './logout.componenet';

@Component({
    selector: 'my-auth',
    template: `
        <h2>Auth</h2>
    `,
    styleUrls: ['./js/app/app.style.css']
})

@Routes([
    { path: '/signup', component: SignupComponent },
    { path: '/login', component: LoginComponent },
    { path: '/logout', component: LogoutComponent }
])
export class AuthComponent {

}