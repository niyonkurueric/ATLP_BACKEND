import express from 'express'

import { authenticate } from '../../middlewares/authenticate.js';
import { queryValidation } from '../../validations/queryValidation/query.validation';
import { QueryController } from '../../controllers/queriesController';

const route = express.Router()


/**
 * @swagger
 * components:
 *   schemas:
 *     Query:
 *       type: object
 *       required:
 *         - title
 *         - images
 *       properties:
 *         email:
 *           type: string
 *           description: The auto-generated id of the query
 *         Name:
 *           type: string
 *           description: The query Name
 *         message:
 *           type: string
 *           description: The message
 *         
 *       example:
 *         Name: Niyonkuru
 *         message: The New Turing Omnibus
 *         Email: your email
 */


/**
 * @swagger
 * /api/v1/queries:
 *   get:
 *     summary: Returns the list of all queries
 *     tags: [queries]
 *     responses:
 *       200:
 *         description: The list of the queries
 */

route.get('/', authenticate, (req, res, next) => {
    new QueryController()
        .getAllArticles(req, res, next)
})



/**
 * @swagger
 * /api/v1/queries:
 *   post:
 *     summary: Create a new message
 *     tags: [queries]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Query'
 *     responses:
 *       200:
 *         description: The Query was successfully created
 *         
 *       500:
 *         description: Some server error
 */



route.post('/', (req, res, next) => {

    new QueryController()
        .createquery(req, res, next)
})

/**
 * @swagger
 * /api/v1/queries/{id}:
 *   get:
 *     summary: Get the one queries
 *     tags: [queries]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The queries id
 *     responses:
 *       200:
 *         description: The queries description 
 *         contens:
 *           
 *       404:
 *         description: The queries was not found
 */


route.get('/:id', authenticate, queryValidation, (req, res, next) => {
    new QueryController()
        .getArticle(req, res, next)
})
export default route