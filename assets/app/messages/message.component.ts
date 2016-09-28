import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Message } from './message';

@Component({
    selector: 'my-message',
    templateUrl: './js/app/messages/message.template.html',
    styleUrls: ['./js/app/app.style.css']
})
export class MessageComponent {
    @Input('msg') message:Message;
    @Output() clickEdit = new EventEmitter<string>();

    edit() {
        this.clickEdit.emit('Edit this');
    }
}