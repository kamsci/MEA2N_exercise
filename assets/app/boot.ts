///<reference path="../../typings.d.ts"/>
import { bootstrap } from '@angular/platform-browser-dynamic';
import { ROUTER_PROVIDERS } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { provide } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';

import { AppComponent } from './app.component';
import { AuthService } from './auth/auth.service'
import { MessageService } from './messages/message.service';


bootstrap(AppComponent, [ 
    AuthService,
    MessageService, 
    ROUTER_PROVIDERS, 
    provide(LocationStrategy, { useClass: HashLocationStrategy }),
    HTTP_PROVIDERS
]);