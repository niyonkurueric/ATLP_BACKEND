import Article from "../models/article";
import { ArticleServices } from "../services/articleServices";
import cloudinary from "cloudinary"

export class ArticleController {
    // TODO Don't access database from this file you only needs  
    async createArticle(req, res, next) {
        try {
            console.log(req.file);
            cloudinary.v2.uploader.upload(req.file.path, async function(err, image) {
                if (err) { console.warn(err); }
                req.body.image = image.url

                const data = {
                    title: req.body.title,
                    content: req.body.content,
                    image: req.body.image,
                    create_at: new Date()
                }
                console.log(data)
                const article = await ArticleServices.createArticle(data)
                res.status(201).json({ status: 201, message: "Article created successfully", data: article })
            });
        } catch (error) {
            console.log(error)
        }
    }
    async getAllArticles(req, res, next) {
        try {
            const articles = await ArticleServices.getAllArticles()
            res.send(articles)
        } catch (error) {
            res.status(404).send({ error: error.message })
        }
    }
    async getArticle(req, res, next) {
        try {
            const article = await ArticleServices.getArticle(req.params.id)
            res.send(article)
        } catch (error) {
            res.status(404).send({ error: error.message })
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
            if (req.body.image) {
                info['image'] = req.body.image;
            }
            if (req.body.likes) {
                info['likes'] = req.body.likes
            }
            const article = await ArticleServices.updateArticle(req.params.id, info);
            res.send(article);
        } catch (error) {
            res.status(404).send({ error: error.message })
        }
    }

    async deleteArticle(req, res, next) {
        try {
            await ArticleServices.deleteArticle(req.params.id)
            res.send("delete well")
        } catch (error) {
            res.status(404).send({ error: error.message })
        }
    }







}