import { Action } from "../../models";
import { types } from "./actions";
import * as models from "./models";

export const initState: models.IState = {
    count: 0
}

export const reducer = (lastState: models.IState = initState, action: Action) : any => {
    switch (action.type) {
        case types.INCREMENT: return { count: lastState.count + action.payload.amount };
        case types.DECREMENT: return { count: lastState.count - action.payload.amount };
    }

    // We don't care about any other actions right now.
    return lastState;
}

export { models }
