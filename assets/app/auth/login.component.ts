import { Component, OnInit } from '@angular/core'; 
import { FormBuilder, ControlGroup, Validators, Control } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

import { User } from './user';

@Component({
    selector: 'my-login',
    templateUrl: './js/app/auth/login.template.html',
    styleUrls: ['./js/app/app.style.css']
})
export class LoginComponent implements OnInit {
    myForm: ControlGroup;

    constructor(private _fb:FormBuilder, private _authService: AuthService, private _router: Router) {}

    ngOnInit () {
        this.myForm = this._fb.group({
            email: ['', Validators.compose([
                Validators.required,
                this.isEmail
            ])],
            password: ['', Validators.required]
        })
    }
    onLogin (){
        // console.log(this.myForm.value);
       const user = new User(this.myForm.value.email, this.myForm.value.password);
       this._authService.login(user)
            .subscribe(
                data => {
                    // store token and user ID in JS local storage
                    console.log("login data", data)
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('userId', data.userId);
                    // switch to home page after login
                    this._router.navigateByUrl('/');
                },
                error => console.log(error)
            );
    }

    private isEmail(control: Control): {[s:string]: boolean} {
        if(!control.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            return {invalidMail: true};
        }
    }
}