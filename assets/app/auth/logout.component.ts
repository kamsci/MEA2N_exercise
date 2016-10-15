import { Component } from '@angular/core';

@Component({
    selector: 'my-logout',
    template: `
        <section class="col-sm-8 col-sm-offset-2 auth">
            <button class="btn btn-danger" (click)="onLogout()">Logout</button>
        </section> `,
    styleUrls: ['./js/app/app.style.css']
})
export class LogoutComponent {
    onLogout (){

    }
}