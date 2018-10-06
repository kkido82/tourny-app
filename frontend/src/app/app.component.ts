import { Component } from '@angular/core';

import { NgRedux, select } from '@angular-redux/store';
import { Observable } from 'rxjs';
import { AppState } from './store/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  @select(['login', 'count']) readonly count$: Observable<number>;

  constructor(
    private ngRedux: NgRedux<AppState>) { }
}