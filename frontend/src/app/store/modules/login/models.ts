import { User } from "../../../models/user.model";

export interface State {
    // signUpData: ISignUpData;
    message: string;
}

export interface SignUpData {
    newUser: User;
}
export interface SignUpSuccess {
    success: boolean;
    message?: string;
}

export interface LoginData {
    username: string;
    password: string;
}

