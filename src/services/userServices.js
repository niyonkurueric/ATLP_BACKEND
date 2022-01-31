import User from "../models/user";

export class UserServices {
    static createUser(data) {
        data.save()
    }

    static async getUser() {
        const articles = await User.find()
        return articles
    }
}