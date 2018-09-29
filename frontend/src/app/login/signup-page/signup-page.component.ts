import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, EmailValidator } from '@angular/forms';
import { User } from '../../models/user.model';
import comparePassword from "../../validators/compare-password.validator";
import emailValidator from "../../validators/email.validator";
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../../store/models';
import { signUp } from '../../store/modules/login/actions';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {
  @ViewChild('pswSummary') pswSummary: ElementRef<HTMLSpanElement>;
  signupDataForm: FormGroup;
  personalDetailsForm: FormGroup;
  newUser: User = new User();
  @select(['login', 'message']) readonly message$;

  constructor(formBuilder: FormBuilder, private ngRedux: NgRedux<IAppState>) {
    this.signupDataForm = formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(1)]],
      confirmPassword: ['']
    }, { validator: comparePassword });

    this.personalDetailsForm = formBuilder.group({
      firstName: ['', Validators.required],
      lastName: [''],
      email: ['', [Validators.required, emailValidator]],
      rightHanded: ['']
    });


  }

  ngOnInit() {

  }

  step1Complete() {
    return this.signupDataForm.valid;
  }
  step2Complete() {
    return this.personalDetailsForm.valid;
  }

  register() {
    this.ngRedux.dispatch(signUp(this.newUser));
  }

  togglePassword() {
    let pswSummary = this.pswSummary.nativeElement;
    if (pswSummary.getAttribute('type') == 'password'){
      pswSummary.setAttribute('type', 'text');
    }
    else{
      pswSummary.setAttribute('type', 'password');
    }
  }
}
