import { Component, OnInit } from '@angular/core';
import { Message } from './message';
import { MessageService } from './message.service';

@Component({
    selector: 'my-new-message',
    templateUrl: './js/app/messages/new-message.template.html',
    styleUrls: ['./js/app/app.style.css']
})
export class NewMessageComponent implements OnInit {

    message:Message = null;

    // Inject an instance of MessagesService (dependency) on build of this compenent, call it _messageServices
    constructor(private _messageService: MessageService) {};

    ngOnInit(){
        this._messageService.messageEditRequest
            .subscribe(message => {
                // set local message var equal to the message that was clicked on and started the event emitter
                this.message = message;
            });
    }

    onSubmit(form:any) {
        if(this.message) {
            // Edit
            this.message.content = form.content;
            this._messageService.updateMessage(this.message)
                .subscribe(
                    data => console.log(data),
                    error => console.log(error)
                )
            this.message = null;
        } else {
            const message: Message = new Message(form.content, null, 'Platapus');
            this._messageService.addMessage(message)
            //subscribe to observable send from service
                .subscribe(
                    data => {
                        console.log(data)
                        this._messageService.messages.push(data);
                    },
                    error => console.log(error)
                );
        }
        
    }

    onCancel() {
        this.message = null;
    }
    
}