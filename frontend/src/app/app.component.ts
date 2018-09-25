import { Component } from '@angular/core';

import { NgRedux } from '@angular-redux/store'; // <- New
import { CounterActions } from './store/modules/login/actions'; // <- New
import { IAppState } from "./store/state.model"; // <- New

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  count: number; // <- New
  subscription; // <- New;

  constructor(                           // <- New
    private ngRedux: NgRedux<IAppState>, // <- New
    private actions: CounterActions) {
      this.subscription = ngRedux.select<number>(['login', 'count'])
      .subscribe(newCount => this.count = newCount )
    }  // <- New

  increment() {
    this.ngRedux.dispatch(this.actions.increment()); // <- New
  }

  decrement() {
    this.ngRedux.dispatch(this.actions.decrement()); // <- New
  }
}
