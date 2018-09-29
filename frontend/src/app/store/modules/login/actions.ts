import { Action } from '../../models';
import { ISignUpData, ISignUpSuccess } from './models';
import { User } from '../../../models/user.model';

export const types = {
    SIGN_UP_SUBMIT: '[LOGIN] SignUp form submit',
    SIGN_UP_SUCCESS: '[LOGIN] SignUp success',
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT'
}

export const increment = (amount: number = 1): Action<{amount: number}> => {
    return { type: types.INCREMENT, payload: { amount }, loading: true };
}

export const decrement = (amount: number = 1): Action<{amount: number}> => {
    return { type: types.DECREMENT, payload: { amount }, loading: true };
}

export const signUp = (newUser: User): Action<ISignUpData> => {
    return { type: types.SIGN_UP_SUBMIT, payload: { newUser }, loading: true };
}

export const signUpSuccess = (signUpResult: ISignUpSuccess): Action<ISignUpSuccess> => {
    return { type: types.SIGN_UP_SUCCESS, payload: { success: signUpResult.success, message: signUpResult.message }, loading: false };
}
