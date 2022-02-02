import { createComment, getArticleComments } from "../services/commentServices.js"

export class CommentControllers {
    async addComment(req, res, next) {
        try {
            const data = {
                articleId: req.params.articleid,
                name: req.body.name,
                comment: req.body.comment,
            }
            const comment = await createComment(data)
            res.status(201).json(comment)
        } catch (error) {
            console.log(error)
        }
    }
    async getComments(req, res, next) {
        try {
            const comments = await getArticleComments(req.params.articleid)
            res.status(200).json(comments)
        } catch (error) {
            console.log(error)
        }
    }
}