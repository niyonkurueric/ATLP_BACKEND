import query from "../models/query";
import { queryService } from "../services/QueryServices";
export class QueryController {

    async createquery(req, res, next) {
        try {
            const message = new query({
                name: req.body.name,
                content: req.body.content,
                email: req.body.email,
            })
            const article = await queryService.createquery(message)
            res.status(200).json({ status: 200, message: "Created.....  ", message: article });
        } catch (error) {
            res.status(404).send({ error: error.message })
        }
    }
    async getAllArticles(req, res, next) {
        try {
            const allquery = await queryService.getAllArticles()
            res.send(allquery)
        } catch (error) {
            res.status(404).send({ error: error.message })
        }
    }
    async getArticle(req, res, next) {
        try {
            const queriesone = await queryService.getArticle(req.params.id)
            res.send(queriesone)
        } catch (error) {
            res.status(404).send({ error: error.message })
        }
    }

}