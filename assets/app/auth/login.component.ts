import { Component } from '@angular/core';

@Component({
    selector: 'my-login',
    template: `
        <section class="col-sm-8 col-sm-offset-2>
            <button class="btn" (click)="onLogin()">Login</button>
        </section> `,
    styleUrls: ['./js/app/app.style.css']
})
export class LoginComponent {
    onLogin (){

    }
}