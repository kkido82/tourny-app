import { State } from "./models";

export const initState: State = {
    loading: false
};

export const reducers = (state: State = initState, action): State => {
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
