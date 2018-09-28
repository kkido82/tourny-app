import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { IAppState } from './models';
import { NgModule } from '@angular/core';
import * as login from './modules/login';
import * as global from './modules/global';
import { combineReducers } from 'redux';

const initState: IAppState = {
    global: global.initState,
    login: login.initState
};

const rootReducer = combineReducers<IAppState>({
    global: global.reducer,
    login: login.reducer
});

@NgModule({
    imports: [
        NgReduxModule
    ]
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
            initState, null, enhancers);
    }
}