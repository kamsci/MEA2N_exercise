import { Component } from '@angular/core';
import { Message } from './message';
import { MessageService } from './message.service';

@Component({
    selector: 'my-new-message',
    template: `
        <section class="col-sm-10 col-sm-offset-1">
            <div class="form-group">
                <input type="text" class="form-control" id="content" placeholder="Type your message.." #input>
            </div>
            <button type="submit" class="btn btn-primary" (click)="onCreate(input.value)">Send</button>
        </section>`,
    styleUrls: ['./js/app/app.style.css']
})
export class NewMessageComponent {
    // Inject an instance of MessagesService (dependency) on build of this compenent, call it _messageServices
    constructor(private _messageService: MessageService) {};

    onCreate(content: string) {
        const message: Message = new Message(content, null, 'Platapus');
        this._messageService.addMessage(message);
    }
    
}