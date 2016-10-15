import { Component } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES } from '@angular/router';

import { SignupComponent } from './signup.component';
import { LoginComponent } from './login.component';
import { LogoutComponent } from './logout.component';

@Component({
    selector: 'my-auth',
    templateUrl: './js/app/auth/auth.template.html',
    styleUrls: ['./js/app/app.style.css'],
    directives: [ ROUTER_DIRECTIVES ]
})

@Routes([
    { path: '/signup', component: SignupComponent},
    { path: '/login', component: LoginComponent },
    { path: '/logout', component: LogoutComponent }
])
export class AuthComponent {

}