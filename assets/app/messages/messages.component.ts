import { Component } from '@angular/core';
import { MessageListComponent } from './message-list.component';
import { NewMessageComponent } from './new-message.component';
import { Message } from './message';

@Component({
    selector: 'my-messages',
    template: `
        <div class="row">
            <my-new-message></my-new-message>
        </div>
        <div class="row">
            <my-message-list></my-message-list>
        </div>
    `,
    styleUrls: ['./js/app/app.style.css'],
    directives: [ MessageListComponent, NewMessageComponent ]
})
export class MessagesComponent {
    
}