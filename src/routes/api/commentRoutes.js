import express from 'express'
import { CommentControllers } from '../../controllers/commentsController'
import { commentValidation } from '../../validations/commentValidation/comment.validation.js'

const route = express.Router()
const commentsController = new CommentControllers()
route.post('/:articleid', commentValidation, commentsController.addComment)
route.get('/:articleid', commentsController.getComments)

export default route