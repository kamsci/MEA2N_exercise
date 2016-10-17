import { Component, OnInit } from '@angular/core';
import { FormBuilder, ControlGroup, Validators, Control } from '@angular/common';
import { AuthService } from './auth.service';
import { User } from './user';

@Component({
    selector: 'my-signup',
    templateUrl: './js/app/auth/signup.template.html',
    styleUrls: ['./js/app/app.style.css']
})
export class SignupComponent implements OnInit{
    myForm: ControlGroup;

    constructor(private _fb:FormBuilder, private _authService: AuthService) {}

    ngOnInit () {
        this.myForm = this._fb.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', Validators.compose([
                Validators.required,
                this.isEmail
            ])],
            password: ['', Validators.required]
        })
    }
    onSignup (){
        const user = new User(this.myForm.value.email, this.myForm.value.password, this.myForm.value.firstName, this.myForm.value.lastName);
        console.log("user", user);
        this._authService.signup(user)
            .subscribe(
                // remove console log for production! b/c of pw
                data => console.log(data),
                error => console.log(error)
            )
    }

    private isEmail(control: Control): {[s:string]: boolean} {
        if(!control.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            return {invalidMail: true};
        }
    }
}