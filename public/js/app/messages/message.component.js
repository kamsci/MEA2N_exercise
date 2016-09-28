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
var MessageComponent = (function () {
    function MessageComponent() {
        this.clickEdit = new core_1.EventEmitter();
    }
    MessageComponent.prototype.edit = function () {
        this.clickEdit.emit('Edit this');
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
        __metadata('design:paramtypes', [])
    ], MessageComponent);
    return MessageComponent;
}());
exports.MessageComponent = MessageComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBdUQsZUFBZSxDQUFDLENBQUE7QUFDdkUsd0JBQXdCLFdBQVcsQ0FBQyxDQUFBO0FBT3BDO0lBQUE7UUFFYyxjQUFTLEdBQUcsSUFBSSxtQkFBWSxFQUFVLENBQUM7SUFLckQsQ0FBQztJQUhHLCtCQUFJLEdBQUo7UUFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBTEQ7UUFBQyxZQUFLLENBQUMsS0FBSyxDQUFDOztxREFBQTtJQUNiO1FBQUMsYUFBTSxFQUFFOzt1REFBQTtJQVBiO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFdBQVcsRUFBRSx5Q0FBeUM7WUFDdEQsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7U0FDeEMsQ0FBQzs7d0JBQUE7SUFRRix1QkFBQztBQUFELENBUEEsQUFPQyxJQUFBO0FBUFksd0JBQWdCLG1CQU81QixDQUFBIiwiZmlsZSI6Im1lc3NhZ2VzL21lc3NhZ2UuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICcuL21lc3NhZ2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LW1lc3NhZ2UnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9qcy9hcHAvbWVzc2FnZXMvbWVzc2FnZS50ZW1wbGF0ZS5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9qcy9hcHAvYXBwLnN0eWxlLmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VDb21wb25lbnQge1xuICAgIEBJbnB1dCgnbXNnJykgbWVzc2FnZTpNZXNzYWdlO1xuICAgIEBPdXRwdXQoKSBjbGlja0VkaXQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICAgIGVkaXQoKSB7XG4gICAgICAgIHRoaXMuY2xpY2tFZGl0LmVtaXQoJ0VkaXQgdGhpcycpO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
