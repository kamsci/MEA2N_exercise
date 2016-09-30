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
    }
    ;
    NewMessageComponent.prototype.onCreate = function (content) {
        var message = new message_1.Message(content, null, 'Platapus');
        this._messageService.addMessage(message);
    };
    NewMessageComponent = __decorate([
        core_1.Component({
            selector: 'my-new-message',
            template: "\n        <section class=\"col-sm-10 col-sm-offset-1\">\n            <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control\" id=\"content\" placeholder=\"Type your message..\" #input>\n            </div>\n            <button type=\"submit\" class=\"btn btn-primary\" (click)=\"onCreate(input.value)\">Send</button>\n        </section>",
            styleUrls: ['./js/app/app.style.css']
        }), 
        __metadata('design:paramtypes', [message_service_1.MessageService])
    ], NewMessageComponent);
    return NewMessageComponent;
}());
exports.NewMessageComponent = NewMessageComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL25ldy1tZXNzYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBQzFDLHdCQUF3QixXQUFXLENBQUMsQ0FBQTtBQUNwQyxnQ0FBK0IsbUJBQW1CLENBQUMsQ0FBQTtBQWFuRDtJQUNJLDBHQUEwRztJQUMxRyw2QkFBb0IsZUFBK0I7UUFBL0Isb0JBQWUsR0FBZixlQUFlLENBQWdCO0lBQUcsQ0FBQzs7SUFFdkQsc0NBQVEsR0FBUixVQUFTLE9BQWU7UUFDcEIsSUFBTSxPQUFPLEdBQVksSUFBSSxpQkFBTyxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQWxCTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFFBQVEsRUFBRSxnWEFNSztZQUNmLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO1NBQ3hDLENBQUM7OzJCQUFBO0lBVUYsMEJBQUM7QUFBRCxDQVRBLEFBU0MsSUFBQTtBQVRZLDJCQUFtQixzQkFTL0IsQ0FBQSIsImZpbGUiOiJtZXNzYWdlcy9uZXctbWVzc2FnZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICcuL21lc3NhZ2UnO1xuaW1wb3J0IHsgTWVzc2FnZVNlcnZpY2UgfSBmcm9tICcuL21lc3NhZ2Uuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktbmV3LW1lc3NhZ2UnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiY29sLXNtLTEwIGNvbC1zbS1vZmZzZXQtMVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwiY29udGVudFwiIHBsYWNlaG9sZGVyPVwiVHlwZSB5b3VyIG1lc3NhZ2UuLlwiICNpbnB1dD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiAoY2xpY2spPVwib25DcmVhdGUoaW5wdXQudmFsdWUpXCI+U2VuZDwvYnV0dG9uPlxuICAgICAgICA8L3NlY3Rpb24+YCxcbiAgICBzdHlsZVVybHM6IFsnLi9qcy9hcHAvYXBwLnN0eWxlLmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIE5ld01lc3NhZ2VDb21wb25lbnQge1xuICAgIC8vIEluamVjdCBhbiBpbnN0YW5jZSBvZiBNZXNzYWdlc1NlcnZpY2UgKGRlcGVuZGVuY3kpIG9uIGJ1aWxkIG9mIHRoaXMgY29tcGVuZW50LCBjYWxsIGl0IF9tZXNzYWdlU2VydmljZXNcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9tZXNzYWdlU2VydmljZTogTWVzc2FnZVNlcnZpY2UpIHt9O1xuXG4gICAgb25DcmVhdGUoY29udGVudDogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2U6IE1lc3NhZ2UgPSBuZXcgTWVzc2FnZShjb250ZW50LCBudWxsLCAnUGxhdGFwdXMnKTtcbiAgICAgICAgdGhpcy5fbWVzc2FnZVNlcnZpY2UuYWRkTWVzc2FnZShtZXNzYWdlKTtcbiAgICB9XG4gICAgXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
