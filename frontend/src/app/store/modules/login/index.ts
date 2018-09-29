import { types, signUpSuccess } from "./actions";
import * as models from "./models";
import { UserService } from "../../../services/user.service";
import { resolve } from "../../../utils/resolver";
import { Action } from "../../models";

export const initState: models.IState = {
    // signUpData: {
    //     newUser: {
    //         userName: '',
    //         password: ''
    //     }
    // },
    message: '',
    count: 0
}

export const reducers = (lastState: models.IState = initState, action: Action<any>): models.IState => {
    debugger;
    switch (action.type) {
        case types.INCREMENT: return { ...lastState, count: lastState.count + action.payload.amount };
        case types.DECREMENT: return { ...lastState, count: lastState.count - action.payload.amount };
        // case types.SIGN_UP_SUBMIT: return {...lastState, signUpData: action.payload };
        case types.SIGN_UP_SUCCESS: return { ...lastState, message: action.payload.message };
    }

    // We don't care about any other actions right now.
    return lastState;
}

//Middlewares
const submitSignUp = store => next => action => {
    debugger;
    switch (action.type) {
        case types.SIGN_UP_SUBMIT:
            let { newUser } = action.payload;
            resolve(UserService)
                .submitSignUp(newUser)
                .then(
                    signUpResponse => {
                        if (signUpResponse.success) {
                            return store.dispatch(signUpSuccess(signUpResponse));
                        }
                    }
                )
                .catch(err => console.log(err))
            break;
        default:
            break;
    }

    return next(action);
}

export const middlewares = [
    submitSignUp
];

export { models }
