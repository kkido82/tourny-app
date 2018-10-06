import { types, signUpSuccess } from "./actions";
import * as models from "./models";
import { UserService } from "../../../services/user.service";
import { resolve } from "../../../utils/resolver";
import { Action } from "../../models";

export const initState: models.State = {
    // signUpData: {
    //     newUser: {
    //         userName: '',
    //         password: ''
    //     }
    // },
    message: ''
}

export const reducers = (lastState: models.State = initState, action: Action<any>): models.State => {
    debugger;
    switch (action.type) {
        // case types.SIGN_UP_SUBMIT: return {...lastState, signUpData: action.payload };
        case types.SIGN_UP_SUCCESS: return { ...lastState, message: action.payload.message };
    }

    // We don't care about any other actions right now.
    return lastState;
}

//Middlewares
const submitSignUp = store => next => action => {
    debugger;
    if (action.type === types.SIGN_UP_SUBMIT) {
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
    }

    return next(action);
}

export const middlewares = [
    submitSignUp
];

export { models }
