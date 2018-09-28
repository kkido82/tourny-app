import * as loginModels from "./modules/login/models";
import * as globalModels from "./modules/global/models";

export interface IAppState {
    global: globalModels.IState;
    login: loginModels.IState;
}

export interface Action {
    type: string;
    payload?: any;
    loading: boolean;
}