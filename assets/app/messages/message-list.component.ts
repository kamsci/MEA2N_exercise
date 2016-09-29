import { Component } from '@angular/core';
import { MessageComponent } from './message.component';
import { Message } from './message';

@Component({
    selector: 'my-message-list',
    template: `
    <div class="row">
        <div class="col-sm-10 col-sm-offset-1">
            <h1>Messages</h1>
            <my-message *ngFor="let message of messages" [msg]="message" (clickEdit)="message.content = $event"></my-message>
        </div>
    </div>`,
    styleUrls: ['./js/app/app.style.css'],
    directives: [ MessageComponent ]
})
export class MessageListComponent {
        messages: Message[] = [
        new Message('A new Message!', null, 'Maxine'),
        new Message('Another new Message!', null, 'Bobby'),
        new Message('So many new Messages!', null, 'Samuel')
    ]

}