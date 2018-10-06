import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SigninPageComponent } from './signin-page/signin-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { RouterModule } from '@angular/router';
import { ArchwizardModule } from 'angular-archwizard';
import { TextColorDirective } from '../directives/text-color.directive';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    ArchwizardModule
  ],
  declarations: [SigninPageComponent, SignupPageComponent, TextColorDirective],
  exports: [SigninPageComponent]
})
export class LoginModule { }
