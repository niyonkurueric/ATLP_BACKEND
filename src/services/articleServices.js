import Article from "../models/article"

export class ArticleServices {
    static async createArticle(data) {
        return await data.save()
    }
    static async getAllArticles() {
        const articles = await Article.find()
        return articles
    }
    static async getArticle(id) {
        const article = await Article.findOne({ _id: id })
        return article
    }
}