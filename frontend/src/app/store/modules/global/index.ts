import { IState } from "./models";

export const initState: IState = {
    loading: false
};

export const reducer = (state = initState, action) => {
    if(action.loading) {
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
