import express from 'express'
import { CommentControllers } from '../../controllers/commentsController'
import { commentValidation } from '../../validations/commentValidation/comment.validation.js'

const route = express.Router()


/**
 * @swagger
 * components:
 *   schemas:
 *     comment:
 *       type: object
 *       required:
 *         - name
 *         - message
 *       properties:
 *         name:
 *           type: string
 *           description: The auto-generated id of the comments
 *         message:
 *           type: string
 *           description: The message
 *         
 *       example:
 *         Name: Niyonkuru
 *         message: The New Turing Omnibus
 */








const commentsController = new CommentControllers()
    /**
     * @openapi
     * tags:
     *  name: comments
     */
    /**
     * @swagger
     * /api/v1/comments/{articleid}:
     *   get:
     *     summary: Get the one comments
     *     tags: [comments]
     *     parameters:
     *       - in: path
     *         name: id
     *         schema:
     *           type: string
     *         required: true
     *         description: The comments id
     *     responses:
     *       200:
     *         description: The comments description 
     *         contens:
     *           
     *       404:
     *         description: The comments was not found
     */

route.get('/:articleid', commentsController.getComments)

/**
 * @swagger
 * /api/v1/comments/{articleid}:
 *   post:
 *     summary: Create a new comments
 *     tags: [comments]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/comment'
 *     responses:
 *       200:
 *         description: The comments was successfully created
 *         
 *       500:
 *         description: Some server error
 */

route.post('/:articleid', commentValidation, commentsController.addComment)


export default route