import { Component, OnInit } from '@angular/core'; 
import { FormBuilder, ControlGroup, Validators, Control } from '@angular/common';

@Component({
    selector: 'my-login',
    templateUrl: './js/app/auth/login.template.html',
    styleUrls: ['./js/app/app.style.css']
})
export class LoginComponent implements OnInit {
    myForm: ControlGroup;

    constructor(private _fb:FormBuilder) {}

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
        console.log(this.myForm.value);
    }

    private isEmail(control: Control): {[s:string]: boolean} {
        if(!control.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            return {invalidMail: true};
        }
    }
}