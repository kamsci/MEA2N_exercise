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
var signup_componenet_1 = require('./auth/signup.componenet');
var AuthComponent = (function () {
    function AuthComponent() {
    }
    AuthComponent = __decorate([
        core_1.Component({
            selector: 'my-auth',
            template: "\n        <h2>Auth</h2>\n    ",
            styleUrls: ['./js/app/app.style.css']
        }),
        router_1.Routes([
            { path: '/signup', component: signup_componenet_1.SignupComponent },
            { path: '/login', component: LoginComponent },
            { path: '/logout', component: LogoutComponent }
        ]), 
        __metadata('design:paramtypes', [])
    ], AuthComponent);
    return AuthComponent;
}());
exports.AuthComponent = AuthComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvYXV0aC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyx1QkFBMEMsaUJBQWlCLENBQUMsQ0FBQTtBQUU1RCxrQ0FBZ0MsMEJBQTBCLENBQUMsQ0FBQTtBQWdCM0Q7SUFBQTtJQUVBLENBQUM7SUFmRDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsU0FBUztZQUNuQixRQUFRLEVBQUUsK0JBRVQ7WUFDRCxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztTQUN4QyxDQUFDO1FBRUQsZUFBTSxDQUFDO1lBQ0osRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxtQ0FBZSxFQUFFO1lBQy9DLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsY0FBYyxFQUFFO1lBQzdDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFO1NBQ2xELENBQUM7O3FCQUFBO0lBR0Ysb0JBQUM7QUFBRCxDQUZBLEFBRUMsSUFBQTtBQUZZLHFCQUFhLGdCQUV6QixDQUFBIiwiZmlsZSI6ImF1dGgvYXV0aC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlcywgUk9VVEVSX0RJUkVDVElWRVMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBTaWdudXBDb21wb25lbnQgfSBmcm9tICcuL2F1dGgvc2lnbnVwLmNvbXBvbmVuZXQnO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYXV0aCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGgyPkF1dGg8L2gyPlxuICAgIGAsXG4gICAgc3R5bGVVcmxzOiBbJy4vanMvYXBwL2FwcC5zdHlsZS5jc3MnXVxufSlcblxuQFJvdXRlcyhbXG4gICAgeyBwYXRoOiAnL3NpZ251cCcsIGNvbXBvbmVudDogU2lnbnVwQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiAnL2xvZ2luJywgY29tcG9uZW50OiBMb2dpbkNvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogJy9sb2dvdXQnLCBjb21wb25lbnQ6IExvZ291dENvbXBvbmVudCB9XG5dKVxuZXhwb3J0IGNsYXNzIEF1dGhDb21wb25lbnQge1xuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
