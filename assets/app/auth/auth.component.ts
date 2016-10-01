import { Component } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES } from '@angular/router';

import { SignupComponent } from './header.component';
import { LoginComponent } from './messages/messages.component';
import { LogoutComponent } from './auth/logout.component';

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