import { User } from "../../../models/user.model";

export interface IState {
    // signUpData: ISignUpData;
    message: string;
    count: number;
}

export interface ISignUpData {
    newUser: User;
}
export interface ISignUpSuccess {
    success: boolean;
    message?: string;
}

export interface ILoginData {
    username: string;
    password: string;
}

