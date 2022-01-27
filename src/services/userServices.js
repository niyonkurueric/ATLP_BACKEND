import User from "../models/user";

export class UserServices {
    static createUser(data) {
        data.save()
    }
}