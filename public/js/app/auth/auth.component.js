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
var signup_component_1 = require('./signup.component');
var login_component_1 = require('./login.component');
var logout_component_1 = require('./logout.component');
var AuthComponent = (function () {
    function AuthComponent() {
    }
    AuthComponent = __decorate([
        core_1.Component({
            selector: 'my-auth',
            templateUrl: './js/app/auth/auth.template.html',
            styleUrls: ['./js/app/app.style.css'],
            directives: [router_1.ROUTER_DIRECTIVES]
        }),
        router_1.Routes([
            { path: '/signup', component: signup_component_1.SignupComponent },
            { path: '/login', component: login_component_1.LoginComponent },
            { path: '/logout', component: logout_component_1.LogoutComponent }
        ]), 
        __metadata('design:paramtypes', [])
    ], AuthComponent);
    return AuthComponent;
}());
exports.AuthComponent = AuthComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvYXV0aC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyx1QkFBMEMsaUJBQWlCLENBQUMsQ0FBQTtBQUU1RCxpQ0FBZ0Msb0JBQW9CLENBQUMsQ0FBQTtBQUNyRCxnQ0FBK0IsbUJBQW1CLENBQUMsQ0FBQTtBQUNuRCxpQ0FBZ0Msb0JBQW9CLENBQUMsQ0FBQTtBQWNyRDtJQUFBO0lBRUEsQ0FBQztJQWREO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFdBQVcsRUFBRSxrQ0FBa0M7WUFDL0MsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7WUFDckMsVUFBVSxFQUFFLENBQUUsMEJBQWlCLENBQUU7U0FDcEMsQ0FBQztRQUVELGVBQU0sQ0FBQztZQUNKLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsa0NBQWUsRUFBQztZQUM5QyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLGdDQUFjLEVBQUU7WUFDN0MsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxrQ0FBZSxFQUFFO1NBQ2xELENBQUM7O3FCQUFBO0lBR0Ysb0JBQUM7QUFBRCxDQUZBLEFBRUMsSUFBQTtBQUZZLHFCQUFhLGdCQUV6QixDQUFBIiwiZmlsZSI6ImF1dGgvYXV0aC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlcywgUk9VVEVSX0RJUkVDVElWRVMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBTaWdudXBDb21wb25lbnQgfSBmcm9tICcuL3NpZ251cC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tICcuL2xvZ2luLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMb2dvdXRDb21wb25lbnQgfSBmcm9tICcuL2xvZ291dC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWF1dGgnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9qcy9hcHAvYXV0aC9hdXRoLnRlbXBsYXRlLmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2pzL2FwcC9hcHAuc3R5bGUuY3NzJ10sXG4gICAgZGlyZWN0aXZlczogWyBST1VURVJfRElSRUNUSVZFUyBdXG59KVxuXG5AUm91dGVzKFtcbiAgICB7IHBhdGg6ICcvc2lnbnVwJywgY29tcG9uZW50OiBTaWdudXBDb21wb25lbnR9LFxuICAgIHsgcGF0aDogJy9sb2dpbicsIGNvbXBvbmVudDogTG9naW5Db21wb25lbnQgfSxcbiAgICB7IHBhdGg6ICcvbG9nb3V0JywgY29tcG9uZW50OiBMb2dvdXRDb21wb25lbnQgfVxuXSlcbmV4cG9ydCBjbGFzcyBBdXRoQ29tcG9uZW50IHtcblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
