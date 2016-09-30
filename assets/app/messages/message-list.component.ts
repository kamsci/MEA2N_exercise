import { Component, OnInit } from '@angular/core';
import { MessageComponent } from './message.component';
import { MessageService } from './message.service';
import { Message } from './message';

@Component({
    selector: 'my-message-list',
    template: `
        <section class="col-sm-10 col-sm-offset-1">
            <h1>Messages</h1>
            <my-message *ngFor="let message of messages" [msg]="message" (clickEdit)="message.content = $event"></my-message>
        </section>`,
    styleUrls: ['./js/app/app.style.css'],
    directives: [ MessageComponent ]
})
export class MessageListComponent implements OnInit{

        constructor(private _messageService: MessageService) {
            console.log('Messsage List constructor')
        }

        messages: Message[];

        // console.log("M" + messages)

        ngOnInit() {
            // Could have run in constructor, but this is better practice for heavy tasks
            this.messages = this._messageService.getAllMessages();
             console.log("Init", this.messages);
        }

}