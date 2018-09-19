import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../models/user.model';
import comparePassword from "../../validators/compare-password.validator";

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {
  signupForm: FormGroup;
  newUser: User = new User();

  constructor(formBuilder: FormBuilder) {
    this.signupForm = formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(1)]],
      confirmPassword: ['']
    }, { validator: comparePassword });
  }

  ngOnInit() {
  }

  step1Complete(){
    debugger
    return this.signupForm.valid;
  }

  register(){
    alert()
  }



  
}
