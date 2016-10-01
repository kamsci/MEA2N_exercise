import { Component } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES } from '@angular/router';

import { HeaderComponent } from './header.component';
import { MessagesComponent } from './messages/messages.component';
import { AuthComponent } from './auth/auth.component';

@Component({
    selector: 'my-app',
    templateUrl: './js/app/app.template.html',
    styleUrls: ['./js/app/app.style.css'],
    directives: [ ROUTER_DIRECTIVES, HeaderComponent, AuthComponent, MessagesComponent]
})

@Routes([
    { path: '/auth', component: AuthComponent },
    { path: '/', component: MessagesComponent }
])
export class AppComponent {

}