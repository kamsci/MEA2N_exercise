import { Component } from '@angular/core';
import { MessageComponent } from './messages/message.component';
import { Message } from './messages/message'

@Component({
    selector: 'my-app',
    templateUrl: './js/app/app.template.html',
    styleUrls: ['./js/app/app.style.css'],
    directives: [ MessageComponent ]
})
export class AppComponent {
    message:Message = new Message('A new Message!', null, 'Maxine');
}