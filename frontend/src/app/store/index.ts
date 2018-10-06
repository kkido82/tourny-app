import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { AppState } from './models';
import { NgModule } from '@angular/core';
import * as login from './modules/login';
import * as global from './modules/global';
import { combineReducers } from 'redux';
import { ResolverModule } from '../utils/resolver';

const initState: AppState = {
    global: global.initState,
    login: login.initState
};

const rootReducer = combineReducers<AppState>({
    global: global.reducers,
    login: login.reducers
});

const middlewares = [
    ...login.middlewares
]

@NgModule({
    imports: [
        NgReduxModule,
        ResolverModule
    ]
})
export class StoreModule {
    constructor(ngRedux: NgRedux<AppState>, devTools: DevToolsExtension) {
        let enhancers = [];
        if (devTools.isEnabled()) {
            enhancers = [...enhancers, devTools.enhancer()];
        }
        // Tell @angular-redux/store about our rootReducer and our initial state.
        // It will use this to create a redux store for us and wire up all the
        // events.
        ngRedux.configureStore(
            rootReducer,
            initState, middlewares, enhancers);
    }
}