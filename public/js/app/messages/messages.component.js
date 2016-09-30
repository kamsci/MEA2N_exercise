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
var message_list_component_1 = require('./message-list.component');
var new_message_component_1 = require('./new-message.component');
var MessagesComponent = (function () {
    function MessagesComponent() {
    }
    MessagesComponent = __decorate([
        core_1.Component({
            selector: 'my-messages',
            template: "\n        <div class=\"row\">\n            <my-new-message></my-new-message>\n        </div>\n        <div class=\"row\">\n            <my-message-list></my-message-list>\n        </div>\n    ",
            styleUrls: ['./js/app/app.style.css'],
            directives: [message_list_component_1.MessageListComponent, new_message_component_1.NewMessageComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], MessagesComponent);
    return MessagesComponent;
}());
exports.MessagesComponent = MessagesComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBQzFDLHVDQUFxQywwQkFBMEIsQ0FBQyxDQUFBO0FBQ2hFLHNDQUFvQyx5QkFBeUIsQ0FBQyxDQUFBO0FBZ0I5RDtJQUFBO0lBRUEsQ0FBQztJQWZEO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFFBQVEsRUFBRSxrTUFPVDtZQUNELFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO1lBQ3JDLFVBQVUsRUFBRSxDQUFFLDZDQUFvQixFQUFFLDJDQUFtQixDQUFFO1NBQzVELENBQUM7O3lCQUFBO0lBR0Ysd0JBQUM7QUFBRCxDQUZBLEFBRUMsSUFBQTtBQUZZLHlCQUFpQixvQkFFN0IsQ0FBQSIsImZpbGUiOiJtZXNzYWdlcy9tZXNzYWdlcy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1lc3NhZ2VMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9tZXNzYWdlLWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7IE5ld01lc3NhZ2VDb21wb25lbnQgfSBmcm9tICcuL25ldy1tZXNzYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi9tZXNzYWdlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1tZXNzYWdlcycsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgPG15LW5ldy1tZXNzYWdlPjwvbXktbmV3LW1lc3NhZ2U+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8bXktbWVzc2FnZS1saXN0PjwvbXktbWVzc2FnZS1saXN0PlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIHN0eWxlVXJsczogWycuL2pzL2FwcC9hcHAuc3R5bGUuY3NzJ10sXG4gICAgZGlyZWN0aXZlczogWyBNZXNzYWdlTGlzdENvbXBvbmVudCwgTmV3TWVzc2FnZUNvbXBvbmVudCBdXG59KVxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VzQ29tcG9uZW50IHtcbiAgICBcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
