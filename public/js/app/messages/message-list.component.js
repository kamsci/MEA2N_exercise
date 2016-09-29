"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var message_component_1 = require('./message.component');
var message_1 = require('./message');
var MessageListComponent = (function () {
    function MessageListComponent() {
        this.messages = [
            new message_1.Message('A new Message!', null, 'Maxine'),
            new message_1.Message('Another new Message!', null, 'Bobby'),
            new message_1.Message('So many new Messages!', null, 'Samuel')
        ];
    }
    MessageListComponent = __decorate([
        core_1.Component({
            selector: 'my-message-list',
            template: "\n    <div class=\"row\">\n        <div class=\"col-sm-10 col-sm-offset-1\">\n            <h1>Messages</h1>\n            <my-message *ngFor=\"let message of messages\" [msg]=\"message\" (clickEdit)=\"message.content = $event\"></my-message>\n        </div>\n    </div>",
            styleUrls: ['./js/app/app.style.css'],
            directives: [message_component_1.MessageComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], MessageListComponent);
    return MessageListComponent;
}());
exports.MessageListComponent = MessageListComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2UtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyxrQ0FBaUMscUJBQXFCLENBQUMsQ0FBQTtBQUN2RCx3QkFBd0IsV0FBVyxDQUFDLENBQUE7QUFjcEM7SUFBQTtRQUNRLGFBQVEsR0FBYztZQUN0QixJQUFJLGlCQUFPLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQztZQUM3QyxJQUFJLGlCQUFPLENBQUMsc0JBQXNCLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQztZQUNsRCxJQUFJLGlCQUFPLENBQUMsdUJBQXVCLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQztTQUN2RCxDQUFBO0lBRUwsQ0FBQztJQW5CRDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFFBQVEsRUFBRSw4UUFNSDtZQUNQLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO1lBQ3JDLFVBQVUsRUFBRSxDQUFFLG9DQUFnQixDQUFFO1NBQ25DLENBQUM7OzRCQUFBO0lBUUYsMkJBQUM7QUFBRCxDQVBBLEFBT0MsSUFBQTtBQVBZLDRCQUFvQix1QkFPaEMsQ0FBQSIsImZpbGUiOiJtZXNzYWdlcy9tZXNzYWdlLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNZXNzYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9tZXNzYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi9tZXNzYWdlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1tZXNzYWdlLWxpc3QnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEwIGNvbC1zbS1vZmZzZXQtMVwiPlxuICAgICAgICAgICAgPGgxPk1lc3NhZ2VzPC9oMT5cbiAgICAgICAgICAgIDxteS1tZXNzYWdlICpuZ0Zvcj1cImxldCBtZXNzYWdlIG9mIG1lc3NhZ2VzXCIgW21zZ109XCJtZXNzYWdlXCIgKGNsaWNrRWRpdCk9XCJtZXNzYWdlLmNvbnRlbnQgPSAkZXZlbnRcIj48L215LW1lc3NhZ2U+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PmAsXG4gICAgc3R5bGVVcmxzOiBbJy4vanMvYXBwL2FwcC5zdHlsZS5jc3MnXSxcbiAgICBkaXJlY3RpdmVzOiBbIE1lc3NhZ2VDb21wb25lbnQgXVxufSlcbmV4cG9ydCBjbGFzcyBNZXNzYWdlTGlzdENvbXBvbmVudCB7XG4gICAgICAgIG1lc3NhZ2VzOiBNZXNzYWdlW10gPSBbXG4gICAgICAgIG5ldyBNZXNzYWdlKCdBIG5ldyBNZXNzYWdlIScsIG51bGwsICdNYXhpbmUnKSxcbiAgICAgICAgbmV3IE1lc3NhZ2UoJ0Fub3RoZXIgbmV3IE1lc3NhZ2UhJywgbnVsbCwgJ0JvYmJ5JyksXG4gICAgICAgIG5ldyBNZXNzYWdlKCdTbyBtYW55IG5ldyBNZXNzYWdlcyEnLCBudWxsLCAnU2FtdWVsJylcbiAgICBdXG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
