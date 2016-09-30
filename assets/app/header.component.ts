import { Component } from '@angular/core';

@Component({
    selector: 'my-header',
    template: `
        <header class="row header">
            <nav class="col-sm-10 col-sm-offset-1">
                <ul class="nav nav-pills">
                    <li>Messanger</li>
                    <li>Authentication</li>
                </ul>
            </nav>
        </header>
    `,
    styleUrls: ['./js/app/app.style.css']
})

export class HeaderComponent {
    
}