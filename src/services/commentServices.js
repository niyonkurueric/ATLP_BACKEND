import Comment from "../models/comment.js"


export const createComment = async(data) => {
    const comment = await Comment(data)
    comment.save()
    return comment
}

export const getArticleComments = async(id) => {
    const comments = Comment.find({ articleId: id })
    return comments
}