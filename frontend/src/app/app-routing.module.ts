import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninPageComponent } from './login/signin-page/signin-page.component';
import { SignupPageComponent } from './login/signup-page/signup-page.component';

const routes: Routes = [
  { path: '', component: SigninPageComponent },
  { path: 'signin', component: SigninPageComponent },
  { path: 'signup', component: SignupPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
