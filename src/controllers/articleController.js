import Article from "../models/article";
import { ArticleServices } from "../services/articleServices";

export class ArticleController {
    // TODO Don't access database from this file you only needs
    async createArticle(req, res, next) {
        try {
            const data = new Article({
                title: req.body.title,
                content: req.body.content,
                photo: req.body.photo,
            })
            const article = await ArticleServices.createArticle(data)
            res.send(article)
        } catch (error) {
            res.status(404)
            res.send({ error: error.message })
        }
    }
    async getAllArticles(req, res, next) {
        try {
            const articles = await ArticleServices.getAllArticles()
            res.send(articles)
        } catch (error) {
            res.status(404)
            res.send({ error: error.message })
        }
    }
    async getArticle(req, res, next) {
        try {
            const article = await ArticleServices.getArticle(req.params.id)
            res.send(article)
        } catch (error) {
            res.status(404)
            res.send({ error: error.message })
        }
    }
    async updateArticle(req, res, next) {
        try {
            const info = {}
            if (req.body.title) {
                info['title'] = req.body.title;
            }
            if (req.body.content) {
                info['content'] = req.body.content;

            }
            if (req.body.photo) {
                info['photo'] = req.body.photo;
            }
            if (req.body.likes) {
                info['likes'] = req.body.likes
            }
            const article = await ArticleServices.updateArticle(req.params.id, info);
            res.send(article);
        } catch (error) {
            res.status(404)
            res.send({ error: error.message })
        }
    }

    async deleteArticle(req, res, next) {
        try {
            await ArticleServices.deleteArticle(req.params.id)
            res.send("delete well")
        } catch (error) {
            res.status(404);
            res.send({ error: error.message })
        }
    }







}