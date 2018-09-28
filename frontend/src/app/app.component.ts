import { Component } from '@angular/core';

import { NgRedux, select } from '@angular-redux/store';
import { increment, decrement } from './store/modules/login/actions';
import { Observable } from 'rxjs';
import { IAppState } from './store/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  @select(['login', 'count']) readonly count$: Observable<number>;

  constructor(
    private ngRedux: NgRedux<IAppState>) { }

  increment(amount) {
    this.ngRedux.dispatch(increment(amount));
  }

  decrement(amount) {
    this.ngRedux.dispatch(decrement(amount));
  }
}