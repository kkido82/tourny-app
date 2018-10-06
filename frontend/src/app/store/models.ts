import * as loginModels from "./modules/login/models";
import * as globalModels from "./modules/global/models";

export interface AppState {
    global: globalModels.State;
    login: loginModels.State;
}

export interface Action<T> {
    type: string;
    payload?: T;
    loading: boolean;
}