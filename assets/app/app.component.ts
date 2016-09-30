import { Component } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES } from '@angular/router';

import { HeaderComponent } from './header.component';
import { MessagesComponent } from './messages/messages.component';
import { AuthComponent } from './auth/auth.component';

@Component({
    selector: 'my-app',
    template: `
        <div class="container">
            <my-header></my-header>
            <my-auth></my-auth>
            <my-messages></my-messages>
        </div>
    `,
    styleUrls: ['./js/app/app.style.css'],
    directives: [ ROUTER_DIRECTIVES, HeaderComponent, AuthComponent, MessagesComponent]
})

@Routes([
    { path: '/', component: AuthComponent },
    { path: '/auth', component: MessagesComponent }
])
export class AppComponent {

}