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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 3088f4b15e477689f11dcb5b0364a567ae621128
=======

>>>>>>> 3088f4b15e477689f11dcb5b0364a567ae621128
            res.status(200).json({ status: 200, message: "Created.....  " });
        } catch (error) {
            res.status(404).send({ error: error.message })
        }
    }
    async getAllArticles(req, res, next) {
        try {
            const allquery = await queryService.getAllArticles()
            res.send(allquery)
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 3088f4b15e477689f11dcb5b0364a567ae621128
=======

>>>>>>> 3088f4b15e477689f11dcb5b0364a567ae621128
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


    async updateQueries(req, res, next) {
        try {
            const info = {}
            if (req.body.name) {
                info['name'] = req.body.name;
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
            res.status(404).send({ error: error.message })
        }
    }

    async deletequeries(req, res, next) {
        try {
            await queryService.deletequeries(req.params.id)
            res.send("delete well")
        } catch (error) {
            res.status(404).send({ error: error.message })
        }
    }

}