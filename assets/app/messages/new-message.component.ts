import { Component } from '@angular/core';
import { Message } from './message';
import { MessageService } from './message.service';

@Component({
    selector: 'my-new-message',
    templateUrl: './js/app/messages/new-message.template.html',
    styleUrls: ['./js/app/app.style.css']
})
export class NewMessageComponent {
    // Inject an instance of MessagesService (dependency) on build of this compenent, call it _messageServices
    constructor(private _messageService: MessageService) {};

    onSubmit(form:any) {
        const message: Message = new Message(form.content, null, 'Platapus');
        this._messageService.addMessage(message);
    }
    
}