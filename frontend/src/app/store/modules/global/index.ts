import { IState } from "./models";

export const initState: IState = {
    loading: false
};

export const reducers = (state: IState = initState, action): IState => {
    if (action.loading) {
        return {
            ...state,
            loading: true
        }
    }
    else if (!action.loading) {
        return {
            ...state,
            loading: false
        }
    }

    return state;
}
