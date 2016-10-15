import { Message } from './message'
import { Http, Headers } from '@angular/http';
import { Injectable, EventEmitter} from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class MessageService {

    messages: Message[];
    
    constructor(private _http: Http) {};

    messageEditRequest = new EventEmitter<Message>();

    addMessage(message:Message) {
        // this.messages.push(message);
        // console.log(this.messages);
        const body = JSON.stringify(message);
        console.log("body", body);
        const headers = new Headers({'Content-type': 'application/json'});
        return this._http.post('http://localhost:3000/message', body, {headers: headers})
        .map(response => {
            const data = response.json().result;
            console.log("add", data)
            console.log("body2", body);
            let message = new Message(data.content, data._id, 'Dummy', null);
            return message;
        })
        .catch(error => Observable.throw(error.json()));
    }

    getAllMessages() {
        // return this.messages;
        return this._http.get('http://localhost:3000/message')
            .map(response => {
                console.log("response", response);
                const data = response.json().result;
                console.log("data", data)
                let msgArray: any[] = [];
                for(var i = 0; i < data.length; i++) {
                    let message = new Message(data[i].content, data[i]._id, "Dummy", null);
                    msgArray.push(message);
                }
                return msgArray;
            })
            .catch(error => Observable.throw(error.json()));
    }

    editMessage(message: Message) {
        this.messageEditRequest.emit(message);
        // this.messages[this.messages.indexOf(message)] = new Message('Edited Msg', null, 'Dummy');
    }

    deleteMessage(message:Message) {
        this.messages.splice(this.messages.indexOf(message), 1)
    }
} 