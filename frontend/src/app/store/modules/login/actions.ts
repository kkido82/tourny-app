import { Action } from '../../models';
import { SignUpData, SignUpSuccess } from './models';
import { User } from '../../../models/user.model';

export const types = {
    SIGN_UP_SUBMIT: '[LOGIN] SignUp form submit',
    SIGN_UP_SUCCESS: '[LOGIN] SignUp success'
}

export const signUp = (newUser: User): Action<SignUpData> => {
    return { type: types.SIGN_UP_SUBMIT, payload: { newUser }, loading: true };
}

export const signUpSuccess = (signUpResult: SignUpSuccess): Action<SignUpSuccess> => {
    return { type: types.SIGN_UP_SUCCESS, payload: { success: signUpResult.success, message: signUpResult.message }, loading: false };
}
