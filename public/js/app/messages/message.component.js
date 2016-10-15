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
var MessageComponent = (function () {
    function MessageComponent(_messageService) {
        this._messageService = _messageService;
        this.clickEdit = new core_1.EventEmitter();
    }
    MessageComponent.prototype.edit = function () {
        this._messageService.editMessage(this.message);
    };
    MessageComponent.prototype.delete = function () {
        this._messageService.deleteMessage(this.message)
            .subscribe(function (data) { return console.log(data); }, function (error) { return console.log(error); });
    };
    __decorate([
        core_1.Input('msg'), 
        __metadata('design:type', message_1.Message)
    ], MessageComponent.prototype, "message", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], MessageComponent.prototype, "clickEdit", void 0);
    MessageComponent = __decorate([
        core_1.Component({
            selector: 'my-message',
            templateUrl: './js/app/messages/message.template.html',
            styleUrls: ['./js/app/app.style.css']
        }), 
        __metadata('design:paramtypes', [message_service_1.MessageService])
    ], MessageComponent);
    return MessageComponent;
}());
exports.MessageComponent = MessageComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBdUQsZUFBZSxDQUFDLENBQUE7QUFDdkUsd0JBQXdCLFdBQVcsQ0FBQyxDQUFBO0FBQ3BDLGdDQUErQixtQkFBbUIsQ0FBQyxDQUFBO0FBT25EO0lBRUksMEJBQW9CLGVBQStCO1FBQS9CLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQUV6QyxjQUFTLEdBQUcsSUFBSSxtQkFBWSxFQUFVLENBQUM7SUFGSyxDQUFDO0lBSXZELCtCQUFJLEdBQUo7UUFDSSxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUNELGlDQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2FBQy9DLFNBQVMsQ0FDTixVQUFBLElBQUksSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQWpCLENBQWlCLEVBQ3pCLFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBbEIsQ0FBa0IsQ0FDOUIsQ0FBQTtJQUNMLENBQUM7SUFaRDtRQUFDLFlBQUssQ0FBQyxLQUFLLENBQUM7O3FEQUFBO0lBQ2I7UUFBQyxhQUFNLEVBQUU7O3VEQUFBO0lBVGI7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFlBQVk7WUFDdEIsV0FBVyxFQUFFLHlDQUF5QztZQUN0RCxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztTQUN4QyxDQUFDOzt3QkFBQTtJQWlCRix1QkFBQztBQUFELENBaEJBLEFBZ0JDLElBQUE7QUFoQlksd0JBQWdCLG1CQWdCNUIsQ0FBQSIsImZpbGUiOiJtZXNzYWdlcy9tZXNzYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi9tZXNzYWdlJztcbmltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9tZXNzYWdlLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LW1lc3NhZ2UnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9qcy9hcHAvbWVzc2FnZXMvbWVzc2FnZS50ZW1wbGF0ZS5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9qcy9hcHAvYXBwLnN0eWxlLmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfbWVzc2FnZVNlcnZpY2U6IE1lc3NhZ2VTZXJ2aWNlKSB7fVxuICAgIEBJbnB1dCgnbXNnJykgbWVzc2FnZTpNZXNzYWdlO1xuICAgIEBPdXRwdXQoKSBjbGlja0VkaXQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICAgIGVkaXQoKSB7XG4gICAgICAgIHRoaXMuX21lc3NhZ2VTZXJ2aWNlLmVkaXRNZXNzYWdlKHRoaXMubWVzc2FnZSk7XG4gICAgfVxuICAgIGRlbGV0ZSgpIHsgXG4gICAgICAgIHRoaXMuX21lc3NhZ2VTZXJ2aWNlLmRlbGV0ZU1lc3NhZ2UodGhpcy5tZXNzYWdlKVxuICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSxcbiAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICApXG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
