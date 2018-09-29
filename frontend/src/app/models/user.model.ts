export class User {
    firstName: string;
    lastName?: string;
    userName: string;
    password: string;
    email: string;
    ranking?: number;
    rightHanded?: boolean;
    status?: string;
    isAdmin?: boolean;
    loggedIn?: boolean;

    constructor() { }
}