export class Message {

    constructor (
        public content: string, 
        public messageId?: string, 
        public username?: string, 
        public userId?: string) {

    }

// Code below is the same as code above, just using shortcut 'public' above
    // content: string;
    // username: string;
    // messageId: string;
    // userId: string;

    // constructor (content: string, messageId?: string, username?: string, userId?: string) {
    //     this.content = content;
    //     this.username = username;
    //     this.messageId = messageId;
    //     this.userId = userId;
    // }
}