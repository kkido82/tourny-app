import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;
  usernameValid: boolean = true;
  passwordValid: boolean = true;

  constructor(formBuilder: FormBuilder) {
    this.loginForm = formBuilder.group({
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
    const username = this.loginForm.get('username');
    const password = this.loginForm.get('password');

    this.usernameValid = username.valid && (username.dirty || username.touched);
    this.passwordValid = password.valid && (password.dirty || password.touched);

    if (this.loginForm.valid) {
      alert('this.loginForm.valid');
    }
    else {
      
    }
  }

}
