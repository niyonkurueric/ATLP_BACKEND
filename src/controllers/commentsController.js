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
            res.status(201).json({ message: "the comment is added", data: comment })
        } catch (error) {
            res.status(404).send({ error: error.message })
        }
    }
    async getComments(req, res, next) {
        try {
            const comments = await getArticleComments(req.params.articleid)
            res.status(200).json({ message: "comments retrieved successfully", data: comments })
        } catch (error) {
            res.status(404).send({ error: error.message })
        }
    }
}