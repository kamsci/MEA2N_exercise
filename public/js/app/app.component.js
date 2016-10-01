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
var router_1 = require('@angular/router');
var header_component_1 = require('./header.component');
var messages_component_1 = require('./messages/messages.component');
var auth_component_1 = require('./auth/auth.component');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: './js/app/app.template.html',
            styleUrls: ['./js/app/app.style.css'],
            directives: [router_1.ROUTER_DIRECTIVES, header_component_1.HeaderComponent, auth_component_1.AuthComponent, messages_component_1.MessagesComponent]
        }),
        router_1.Routes([
            { path: '/auth', component: auth_component_1.AuthComponent },
            { path: '/', component: messages_component_1.MessagesComponent }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyx1QkFBMEMsaUJBQWlCLENBQUMsQ0FBQTtBQUU1RCxpQ0FBZ0Msb0JBQW9CLENBQUMsQ0FBQTtBQUNyRCxtQ0FBa0MsK0JBQStCLENBQUMsQ0FBQTtBQUNsRSwrQkFBOEIsdUJBQXVCLENBQUMsQ0FBQTtBQWF0RDtJQUFBO0lBRUEsQ0FBQztJQWJEO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSw0QkFBNEI7WUFDekMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7WUFDckMsVUFBVSxFQUFFLENBQUUsMEJBQWlCLEVBQUUsa0NBQWUsRUFBRSw4QkFBYSxFQUFFLHNDQUFpQixDQUFDO1NBQ3RGLENBQUM7UUFFRCxlQUFNLENBQUM7WUFDSixFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLDhCQUFhLEVBQUU7WUFDM0MsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxzQ0FBaUIsRUFBRTtTQUM5QyxDQUFDOztvQkFBQTtJQUdGLG1CQUFDO0FBQUQsQ0FGQSxBQUVDLElBQUE7QUFGWSxvQkFBWSxlQUV4QixDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlcywgUk9VVEVSX0RJUkVDVElWRVMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL2hlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWVzc2FnZXNDb21wb25lbnQgfSBmcm9tICcuL21lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBdXRoQ29tcG9uZW50IH0gZnJvbSAnLi9hdXRoL2F1dGguY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9qcy9hcHAvYXBwLnRlbXBsYXRlLmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2pzL2FwcC9hcHAuc3R5bGUuY3NzJ10sXG4gICAgZGlyZWN0aXZlczogWyBST1VURVJfRElSRUNUSVZFUywgSGVhZGVyQ29tcG9uZW50LCBBdXRoQ29tcG9uZW50LCBNZXNzYWdlc0NvbXBvbmVudF1cbn0pXG5cbkBSb3V0ZXMoW1xuICAgIHsgcGF0aDogJy9hdXRoJywgY29tcG9uZW50OiBBdXRoQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiAnLycsIGNvbXBvbmVudDogTWVzc2FnZXNDb21wb25lbnQgfVxuXSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
