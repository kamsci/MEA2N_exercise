import { Message } from './message'

export class MessageService {
    messages:Message[] = [];

    addMessage(message:Message) {
        this.messages.push(message);
        console.log(this.messages);
    }

    getAllMessages() {
        return this.messages;
    }

    editMessage(message: Message) {
        this.messages[this.messages.indexOf(message)] = new Message('Edited Msg', null, 'Dummy');
    }

    deleteMessage(message:Message) {
        this.messages.splice(this.messages.indexOf(message), 1)
    }
} 