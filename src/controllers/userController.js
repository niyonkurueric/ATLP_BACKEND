import User from "../models/user";
import { UserServices } from "../services/userServices";

export class UserController {
    createUser(req, res, next) {

        const user = new User({
            name: req.body.name,
            username: req.body.username,
            password: req.body.password,
            email: req.body.email
        })
        UserServices.createUser(user)
        res.send(user)
    }

    async getUser(req, res, next) {
        try {
            const articles = await UserServices.getUser()
            res.send(articles)
        } catch (error) {
            res.status(404).send({ error: error.message })
        }
    }
}