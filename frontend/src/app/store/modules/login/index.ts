import { Action } from "redux";
import { CounterActions } from "src/app/store/modules/login/actions";
import { IState, initState } from "./models";

export function counter(lastState: IState = initState, action: Action) : any {
    switch (action.type) {
        case CounterActions.INCREMENT: return { count: lastState.count + 1 };
        case CounterActions.DECREMENT: return { count: lastState.count - 1 };
    }

    // We don't care about any other actions right now.
    return lastState;
}