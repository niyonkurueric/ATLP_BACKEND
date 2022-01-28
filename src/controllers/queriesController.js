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
            res.send(message)
            res.send("create well")

        } catch (error) {
            res.status(404)
            res.send({ error: error.message })
        }
    }
    async getallquery(req, res, next) {
        try {
            const allquery = await queryService.getallquery()
            res.send(allquery)
        } catch (error) {
            res.status(404)
            res.send({ error: error.message })
        }
    }


    async getArticle(req, res, next) {
        try {
            const queriesone = await queryService.getArticle(req.params.id)
            res.send(queriesone)
        } catch (error) {
            res.status(404)
            res.send({ error: error.message })
        }
    }


    async updateQueries(req, res, next) {
        try {
            const info = {}
            if (req.body.name) {
                info['title'] = req.body.name;
            }
            if (req.body.content) {
                info['content'] = req.body.content;

            }
            if (req.body.email) {
                info['email'] = req.body.email;
            }
            const Queriesp = await queryService.updateQueries(req.params.id, info);
            res.send(Queriesp);
        } catch (error) {
            res.status(404)
            res.send({ error: error.message })
        }
    }

    async deletequeries(req, res, next) {
        try {
            await queryService.deletequeries(req.params.id)
            res.send("delete well")
        } catch (error) {
            res.status(404);
            res.send({ error: error.message })
        }
    }

}