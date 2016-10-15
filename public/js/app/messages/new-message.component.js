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
var message_1 = require('./message');
var message_service_1 = require('./message.service');
var NewMessageComponent = (function () {
    // Inject an instance of MessagesService (dependency) on build of this compenent, call it _messageServices
    function NewMessageComponent(_messageService) {
        this._messageService = _messageService;
        this.message = null;
    }
    ;
    NewMessageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._messageService.messageEditRequest
            .subscribe(function (message) {
            // set local message var equal to the message that was clicked on and started the event emitter
            _this.message = message;
        });
    };
    NewMessageComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (this.message) {
            // Edit
            this.message.content = form.content;
            this.message = null;
        }
        else {
            var message = new message_1.Message(form.content, null, 'Platapus');
            this._messageService.addMessage(message)
                .subscribe(function (data) {
                console.log(data);
                _this._messageService.messages.push(data);
            }, function (error) { return console.log(error); });
        }
    };
    NewMessageComponent.prototype.onCancel = function () {
        this.message = null;
    };
    NewMessageComponent = __decorate([
        core_1.Component({
            selector: 'my-new-message',
            templateUrl: './js/app/messages/new-message.template.html',
            styleUrls: ['./js/app/app.style.css']
        }), 
        __metadata('design:paramtypes', [message_service_1.MessageService])
    ], NewMessageComponent);
    return NewMessageComponent;
}());
exports.NewMessageComponent = NewMessageComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL25ldy1tZXNzYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBQ2xELHdCQUF3QixXQUFXLENBQUMsQ0FBQTtBQUNwQyxnQ0FBK0IsbUJBQW1CLENBQUMsQ0FBQTtBQU9uRDtJQUlJLDBHQUEwRztJQUMxRyw2QkFBb0IsZUFBK0I7UUFBL0Isb0JBQWUsR0FBZixlQUFlLENBQWdCO1FBSG5ELFlBQU8sR0FBVyxJQUFJLENBQUM7SUFHK0IsQ0FBQzs7SUFFdkQsc0NBQVEsR0FBUjtRQUFBLGlCQU1DO1FBTEcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxrQkFBa0I7YUFDbEMsU0FBUyxDQUFDLFVBQUEsT0FBTztZQUNkLCtGQUErRjtZQUMvRixLQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCxzQ0FBUSxHQUFSLFVBQVMsSUFBUTtRQUFqQixpQkFrQkM7UUFqQkcsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDZCxPQUFPO1lBQ1AsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNwQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUN4QixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixJQUFNLE9BQU8sR0FBWSxJQUFJLGlCQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDckUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDO2lCQUVuQyxTQUFTLENBQ04sVUFBQSxJQUFJO2dCQUNBLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7Z0JBQ2pCLEtBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM3QyxDQUFDLEVBQ0QsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFsQixDQUFrQixDQUM5QixDQUFDO1FBQ1YsQ0FBQztJQUVMLENBQUM7SUFFRCxzQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDeEIsQ0FBQztJQTFDTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFdBQVcsRUFBRSw2Q0FBNkM7WUFDMUQsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7U0FDeEMsQ0FBQzs7MkJBQUE7SUF3Q0YsMEJBQUM7QUFBRCxDQXZDQSxBQXVDQyxJQUFBO0FBdkNZLDJCQUFtQixzQkF1Qy9CLENBQUEiLCJmaWxlIjoibWVzc2FnZXMvbmV3LW1lc3NhZ2UuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICcuL21lc3NhZ2UnO1xuaW1wb3J0IHsgTWVzc2FnZVNlcnZpY2UgfSBmcm9tICcuL21lc3NhZ2Uuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktbmV3LW1lc3NhZ2UnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9qcy9hcHAvbWVzc2FnZXMvbmV3LW1lc3NhZ2UudGVtcGxhdGUuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vanMvYXBwL2FwcC5zdHlsZS5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOZXdNZXNzYWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIG1lc3NhZ2U6TWVzc2FnZSA9IG51bGw7XG5cbiAgICAvLyBJbmplY3QgYW4gaW5zdGFuY2Ugb2YgTWVzc2FnZXNTZXJ2aWNlIChkZXBlbmRlbmN5KSBvbiBidWlsZCBvZiB0aGlzIGNvbXBlbmVudCwgY2FsbCBpdCBfbWVzc2FnZVNlcnZpY2VzXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfbWVzc2FnZVNlcnZpY2U6IE1lc3NhZ2VTZXJ2aWNlKSB7fTtcblxuICAgIG5nT25Jbml0KCl7XG4gICAgICAgIHRoaXMuX21lc3NhZ2VTZXJ2aWNlLm1lc3NhZ2VFZGl0UmVxdWVzdFxuICAgICAgICAgICAgLnN1YnNjcmliZShtZXNzYWdlID0+IHtcbiAgICAgICAgICAgICAgICAvLyBzZXQgbG9jYWwgbWVzc2FnZSB2YXIgZXF1YWwgdG8gdGhlIG1lc3NhZ2UgdGhhdCB3YXMgY2xpY2tlZCBvbiBhbmQgc3RhcnRlZCB0aGUgZXZlbnQgZW1pdHRlclxuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvblN1Ym1pdChmb3JtOmFueSkge1xuICAgICAgICBpZih0aGlzLm1lc3NhZ2UpIHtcbiAgICAgICAgICAgIC8vIEVkaXRcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZS5jb250ZW50ID0gZm9ybS5jb250ZW50O1xuICAgICAgICAgICAgdGhpcy5tZXNzYWdlID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2U6IE1lc3NhZ2UgPSBuZXcgTWVzc2FnZShmb3JtLmNvbnRlbnQsIG51bGwsICdQbGF0YXB1cycpO1xuICAgICAgICAgICAgdGhpcy5fbWVzc2FnZVNlcnZpY2UuYWRkTWVzc2FnZShtZXNzYWdlKVxuICAgICAgICAgICAgLy9zdWJzY3JpYmUgdG8gb2JzZXJ2YWJsZSBzZW5kIGZyb20gc2VydmljZVxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX21lc3NhZ2VTZXJ2aWNlLm1lc3NhZ2VzLnB1c2goZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuXG4gICAgb25DYW5jZWwoKSB7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IG51bGw7XG4gICAgfVxuICAgIFxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
