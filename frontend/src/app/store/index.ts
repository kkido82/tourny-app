import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store'; // <- New
import { IAppState } from './state.model';
import { NgModule } from '@angular/core';
import * as loginReducers from './modules/login';
import * as loginModles from './modules/login/models'
import { combineReducers } from 'redux';
import { CounterActions } from './modules/login/actions';

const INITIAL_STATE: IAppState = {
    login: loginModles.initState
};

const rootReducer = combineReducers<IAppState>({
    login: loginReducers.counter
});

@NgModule({
    imports: [
        NgReduxModule
    ],
    providers: [CounterActions] // <- New
})
export class StoreModule {
    constructor(ngRedux: NgRedux<IAppState>, devTools: DevToolsExtension) {
        let enhancers = [];
        if (devTools.isEnabled()) {
            enhancers = [...enhancers, devTools.enhancer()];
        }
        // Tell @angular-redux/store about our rootReducer and our initial state.
        // It will use this to create a redux store for us and wire up all the
        // events.
        ngRedux.configureStore(
            rootReducer,
            INITIAL_STATE, null, enhancers);
    }
}