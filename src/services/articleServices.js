import Article from "../models/article"
export class ArticleServices {
    static async createArticle(data) {
        const article = await Article(data)
        article.save()
        return article
    }
    static async getAllArticles() {
        const articles = await Article.find()
        return articles
    }
    static async getArticle(id) {
        const article = await Article.findOne({ _id: id })
        return article
    }
    static async updateArticle(id, info) {
        const article = await Article.findOne({ _id: id })
        if (info.title) {
            article.title = info.title
        }
        if (info.content) {
            article.content = info.content
        }
        if (info.image) {
            article.image = info.image
        }
        if (info.likes) {
            article.likes = info.likes
        }
        await article.save()
        return article
    }
    static async deleteArticle(id) {
        return await Article.deleteOne({ _id: id })
    }
}