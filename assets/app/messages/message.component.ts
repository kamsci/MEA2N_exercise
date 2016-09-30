import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Message } from './message';
import { MessageService } from './message.service';

@Component({
    selector: 'my-message',
    templateUrl: './js/app/messages/message.template.html',
    styleUrls: ['./js/app/app.style.css']
})
export class MessageComponent {

    constructor(private _messageService: MessageService) {}
    @Input('msg') message:Message;
    @Output() clickEdit = new EventEmitter<string>();

    edit() {
        this._messageService.editMessage(this.message);
    }
    delete() { 
        this._messageService.deleteMessage(this.message);
    }
}