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
var common_1 = require('@angular/common');
var router_1 = require('@angular/router');
var auth_service_1 = require('./auth.service');
var user_1 = require('./user');
var LoginComponent = (function () {
    function LoginComponent(_fb, _authService, _router) {
        this._fb = _fb;
        this._authService = _authService;
        this._router = _router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.myForm = this._fb.group({
            email: ['', common_1.Validators.compose([
                    common_1.Validators.required,
                    this.isEmail
                ])],
            password: ['', common_1.Validators.required]
        });
    };
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        // console.log(this.myForm.value);
        var user = new user_1.User(this.myForm.value.email, this.myForm.value.password);
        this._authService.login(user)
            .subscribe(function (data) {
            // store token and user ID in JS local storage
            console.log("login data", data);
            localStorage.setItem('token', data.token);
            localStorage.setItem('userId', data.userId);
            // switch to home page after login
            _this._router.navigateByUrl('/');
        }, function (error) { return console.log(error); });
    };
    LoginComponent.prototype.isEmail = function (control) {
        if (!control.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            return { invalidMail: true };
        }
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'my-login',
            templateUrl: './js/app/auth/login.template.html',
            styleUrls: ['./js/app/app.style.css']
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder, auth_service_1.AuthService, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvbG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQsdUJBQStELGlCQUFpQixDQUFDLENBQUE7QUFDakYsdUJBQXVCLGlCQUFpQixDQUFDLENBQUE7QUFDekMsNkJBQTRCLGdCQUFnQixDQUFDLENBQUE7QUFFN0MscUJBQXFCLFFBQVEsQ0FBQyxDQUFBO0FBTzlCO0lBR0ksd0JBQW9CLEdBQWUsRUFBVSxZQUF5QixFQUFVLE9BQWU7UUFBM0UsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBUTtJQUFHLENBQUM7SUFFbkcsaUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7WUFDekIsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLG1CQUFVLENBQUMsT0FBTyxDQUFDO29CQUMzQixtQkFBVSxDQUFDLFFBQVE7b0JBQ25CLElBQUksQ0FBQyxPQUFPO2lCQUNmLENBQUMsQ0FBQztZQUNILFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxtQkFBVSxDQUFDLFFBQVEsQ0FBQztTQUN0QyxDQUFDLENBQUE7SUFDTixDQUFDO0lBQ0QsZ0NBQU8sR0FBUDtRQUFBLGlCQWVDO1FBZEcsa0NBQWtDO1FBQ25DLElBQU0sSUFBSSxHQUFHLElBQUksV0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMzRSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7YUFDdkIsU0FBUyxDQUNOLFVBQUEsSUFBSTtZQUNBLDhDQUE4QztZQUM5QyxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQTtZQUMvQixZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDMUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzVDLGtDQUFrQztZQUNsQyxLQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNwQyxDQUFDLEVBQ0QsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFsQixDQUFrQixDQUM5QixDQUFDO0lBQ1YsQ0FBQztJQUVPLGdDQUFPLEdBQWYsVUFBZ0IsT0FBZ0I7UUFDNUIsRUFBRSxDQUFBLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyx3SkFBd0osQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoTCxNQUFNLENBQUMsRUFBQyxXQUFXLEVBQUUsSUFBSSxFQUFDLENBQUM7UUFDL0IsQ0FBQztJQUNMLENBQUM7SUF4Q0w7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFVBQVU7WUFDcEIsV0FBVyxFQUFFLG1DQUFtQztZQUNoRCxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztTQUN4QyxDQUFDOztzQkFBQTtJQXFDRixxQkFBQztBQUFELENBcENBLEFBb0NDLElBQUE7QUFwQ1ksc0JBQWMsaUJBb0MxQixDQUFBIiwiZmlsZSI6ImF1dGgvbG9naW4uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJzsgXG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgQ29udHJvbEdyb3VwLCBWYWxpZGF0b3JzLCBDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4vYXV0aC5zZXJ2aWNlJztcblxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4vdXNlcic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktbG9naW4nLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9qcy9hcHAvYXV0aC9sb2dpbi50ZW1wbGF0ZS5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9qcy9hcHAvYXBwLnN0eWxlLmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBteUZvcm06IENvbnRyb2xHcm91cDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2ZiOkZvcm1CdWlsZGVyLCBwcml2YXRlIF9hdXRoU2VydmljZTogQXV0aFNlcnZpY2UsIHByaXZhdGUgX3JvdXRlcjogUm91dGVyKSB7fVxuXG4gICAgbmdPbkluaXQgKCkge1xuICAgICAgICB0aGlzLm15Rm9ybSA9IHRoaXMuX2ZiLmdyb3VwKHtcbiAgICAgICAgICAgIGVtYWlsOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbXG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCxcbiAgICAgICAgICAgICAgICB0aGlzLmlzRW1haWxcbiAgICAgICAgICAgIF0pXSxcbiAgICAgICAgICAgIHBhc3N3b3JkOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdXG4gICAgICAgIH0pXG4gICAgfVxuICAgIG9uTG9naW4gKCl7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubXlGb3JtLnZhbHVlKTtcbiAgICAgICBjb25zdCB1c2VyID0gbmV3IFVzZXIodGhpcy5teUZvcm0udmFsdWUuZW1haWwsIHRoaXMubXlGb3JtLnZhbHVlLnBhc3N3b3JkKTtcbiAgICAgICB0aGlzLl9hdXRoU2VydmljZS5sb2dpbih1c2VyKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gc3RvcmUgdG9rZW4gYW5kIHVzZXIgSUQgaW4gSlMgbG9jYWwgc3RvcmFnZVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImxvZ2luIGRhdGFcIiwgZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgZGF0YS50b2tlbik7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VySWQnLCBkYXRhLnVzZXJJZCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHN3aXRjaCB0byBob21lIHBhZ2UgYWZ0ZXIgbG9naW5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlQnlVcmwoJy8nKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGlzRW1haWwoY29udHJvbDogQ29udHJvbCk6IHtbczpzdHJpbmddOiBib29sZWFufSB7XG4gICAgICAgIGlmKCFjb250cm9sLnZhbHVlLm1hdGNoKC9eKChbXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfV0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvKSkge1xuICAgICAgICAgICAgcmV0dXJuIHtpbnZhbGlkTWFpbDogdHJ1ZX07XG4gICAgICAgIH1cbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
