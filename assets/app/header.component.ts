import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'my-header',
    template: `
        <header class="row header">
            <nav class="col-sm-10 col-sm-offset-1">
                <ul class="nav nav-pills">
                    <li><a [routerLink]="['']">Messanger</a></li>
                    <li><a [routerLink]="['auth']">Authentication</a></li>
                </ul>
            </nav>
        </header>
    `,
    styleUrls: ['./js/app/app.style.css'],
    directives: [ ROUTER_DIRECTIVES ]
})

export class HeaderComponent {
    
}