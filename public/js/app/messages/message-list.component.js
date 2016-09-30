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
var message_service_1 = require('./message.service');
var MessageListComponent = (function () {
    function MessageListComponent(_messageService) {
        this._messageService = _messageService;
        console.log('Messsage List constructor');
    }
    // console.log("M" + messages)
    MessageListComponent.prototype.ngOnInit = function () {
        // Could have run in constructor, but this is better practice for heavy tasks
        this.messages = this._messageService.getAllMessages();
        console.log("Init", this.messages);
    };
    MessageListComponent = __decorate([
        core_1.Component({
            selector: 'my-message-list',
            template: "\n        <section class=\"col-sm-10 col-sm-offset-1\">\n            <h1>Messages</h1>\n            <my-message *ngFor=\"let message of messages\" [msg]=\"message\" (clickEdit)=\"message.content = $event\"></my-message>\n        </section>",
            styleUrls: ['./js/app/app.style.css'],
            directives: [message_component_1.MessageComponent]
        }), 
        __metadata('design:paramtypes', [message_service_1.MessageService])
    ], MessageListComponent);
    return MessageListComponent;
}());
exports.MessageListComponent = MessageListComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2UtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUNsRCxrQ0FBaUMscUJBQXFCLENBQUMsQ0FBQTtBQUN2RCxnQ0FBK0IsbUJBQW1CLENBQUMsQ0FBQTtBQWFuRDtJQUVRLDhCQUFvQixlQUErQjtRQUEvQixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFDL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFBO0lBQzVDLENBQUM7SUFJRCw4QkFBOEI7SUFFOUIsdUNBQVEsR0FBUjtRQUNJLDZFQUE2RTtRQUM3RSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDckQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUF4QlQ7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixRQUFRLEVBQUUsaVBBSUs7WUFDZixTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztZQUNyQyxVQUFVLEVBQUUsQ0FBRSxvQ0FBZ0IsQ0FBRTtTQUNuQyxDQUFDOzs0QkFBQTtJQWlCRiwyQkFBQztBQUFELENBaEJBLEFBZ0JDLElBQUE7QUFoQlksNEJBQW9CLHVCQWdCaEMsQ0FBQSIsImZpbGUiOiJtZXNzYWdlcy9tZXNzYWdlLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1lc3NhZ2VDb21wb25lbnQgfSBmcm9tICcuL21lc3NhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9tZXNzYWdlLnNlcnZpY2UnO1xuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4vbWVzc2FnZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktbWVzc2FnZS1saXN0JyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImNvbC1zbS0xMCBjb2wtc20tb2Zmc2V0LTFcIj5cbiAgICAgICAgICAgIDxoMT5NZXNzYWdlczwvaDE+XG4gICAgICAgICAgICA8bXktbWVzc2FnZSAqbmdGb3I9XCJsZXQgbWVzc2FnZSBvZiBtZXNzYWdlc1wiIFttc2ddPVwibWVzc2FnZVwiIChjbGlja0VkaXQpPVwibWVzc2FnZS5jb250ZW50ID0gJGV2ZW50XCI+PC9teS1tZXNzYWdlPlxuICAgICAgICA8L3NlY3Rpb24+YCxcbiAgICBzdHlsZVVybHM6IFsnLi9qcy9hcHAvYXBwLnN0eWxlLmNzcyddLFxuICAgIGRpcmVjdGl2ZXM6IFsgTWVzc2FnZUNvbXBvbmVudCBdXG59KVxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuXG4gICAgICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX21lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ01lc3NzYWdlIExpc3QgY29uc3RydWN0b3InKVxuICAgICAgICB9XG5cbiAgICAgICAgbWVzc2FnZXM6IE1lc3NhZ2VbXTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIk1cIiArIG1lc3NhZ2VzKVxuXG4gICAgICAgIG5nT25Jbml0KCkge1xuICAgICAgICAgICAgLy8gQ291bGQgaGF2ZSBydW4gaW4gY29uc3RydWN0b3IsIGJ1dCB0aGlzIGlzIGJldHRlciBwcmFjdGljZSBmb3IgaGVhdnkgdGFza3NcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZXMgPSB0aGlzLl9tZXNzYWdlU2VydmljZS5nZXRBbGxNZXNzYWdlcygpO1xuICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSW5pdFwiLCB0aGlzLm1lc3NhZ2VzKTtcbiAgICAgICAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
