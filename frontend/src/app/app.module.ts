import { UserService } from './services/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { MessageComponent } from './components/message/message.component';
import { StoreModule } from './store';
import { TextColorDirective } from './directives/text-color.directive';



@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    AppRoutingModule,
    LoginModule,
    StoreModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
