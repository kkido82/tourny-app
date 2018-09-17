import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin-page',
  templateUrl: './signin-page.component.html',
  styleUrls: ['./signin-page.component.css']
})
export class SigninPageComponent implements OnInit {
  signinForm: FormGroup;
  usernameValid: boolean = true;
  passwordValid: boolean = true;

  constructor(formBuilder: FormBuilder) {
    this.signinForm = formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  ngOnInit() {
  }

  clearValidations(input){
    if (input === 'username') {
      this.usernameValid = true;  
    }
    else if (input === 'password') {
      this.passwordValid = true;
    }
  }

  submit() {
    const username = this.signinForm.get('username');
    const password = this.signinForm.get('password');

    this.usernameValid = username.valid && (username.dirty || username.touched);
    this.passwordValid = password.valid && (password.dirty || password.touched);

    if (this.signinForm.valid) {
      alert('this.signinForm.valid');
    }
    else {
      
    }
  }

}
