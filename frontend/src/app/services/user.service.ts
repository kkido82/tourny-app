import { User } from "../models/user.model";

export class UserService {
    async submitSignUp(newUser: User) {
        return Promise.resolve({ success: true, message: 'success' });
    }
}