import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {
  signupForm: FormGroup;
  newUser: User = new User();
  
  constructor() { }

  ngOnInit() {
  }

  onStep1Next($event){

  }

  onStep2Next($event){}
  onStep3Next($event){}
  onStep4Next($event){}
}
