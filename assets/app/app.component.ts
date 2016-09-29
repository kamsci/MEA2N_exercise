import { Component } from '@angular/core';
import { MessageListComponent } from './messages/message-list.component';
import { Message } from './messages/message'

@Component({
    selector: 'my-app',
    templateUrl: './js/app/app.template.html',
    styleUrls: ['./js/app/app.style.css'],
    directives: [ MessageListComponent ]
})
export class AppComponent {

}