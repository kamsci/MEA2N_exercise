import { Component } from '@angular/core';

@Component({
    selector: 'my-signup',
    template: `
        <section class="col-sm-8 col-sm-offset-2>
            <button class="btn" (click)="onSignup()">signup</button>
        </section> `,
    styleUrls: ['./js/app/app.style.css']
})
export class SignupComponent {
    onSignup (){

    }
}