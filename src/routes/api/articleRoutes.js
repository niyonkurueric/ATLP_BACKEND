import express from 'express'
import { ArticleController } from '../../controllers/articleController'
import multer from 'multer'

//  import { fileFilter } from '../../helpers/fileFilter.js';
import { authenticate } from '../../middlewares/authenticate.js';
import { articleValidation } from '../../validations/articleValidation/article.validation';



const route = express.Router()
const storage = multer.diskStorage({});
const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image')) {
        cb(null, true);
    } else {
        cb('invalid image file!', false);
    }
};
const uploads = multer({ storage, fileFilter });

//swagger get


/**
 * @swagger
 * components:
 *   schemas:
 *     Articles:
 *       type: object
 *       required:
 *         - title
 *         - images
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the articles
 *         title:
 *           type: string
 *           description: The Articles title
 *         content:
 *           type: string
 *           description: The articles content
 *       example:
 *         id: d5fE_asz
 *         title: The New Turing Omnibus
 *         content: Good answer
 */







/**
 * @openapi
 * tags:
 *  name: Articles
 */
/**
 * @swagger
 * /api/v1/aritcles:
 *   get:
 *     summary: Returns the list of all Articles
 *     tags: [Articles]
 *     responses:
 *       200:
 *         description: The list of the Articles
 */

route.get('/', (req, res, next) => {
    new ArticleController()
        .getAllArticles(req, res, next)
})

/**
 * @swagger
 * /api/v1/aritcles:
 *   post:
 *     summary: Create a new Articles
 *     tags: [Articles]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Articles'
 *     responses:
 *       200:
 *         description: The Articles was successfully created
 *         
 *       500:
 *         description: Some server error
 */




route.post('/', uploads.single('image'), authenticate, articleValidation, (req, res, next) => {
    new ArticleController()
        .createArticle(req, res, next)
})


/**
 * @swagger
 * /api/v1/aritcles/{id}:
 *   get:
 *     summary: Get the one Articles
 *     tags: [Articles]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Article id
 *     responses:
 *       200:
 *         description: The articles description 
 *         contens:
 *           
 *       404:
 *         description: The Articles was not found
 */

route.get('/:id', (req, res, next) => {
    const articlesone = new ArticleController().getArticle(req, res, next)
    if (!articlesone) {
        res.sendStatus(404)
    }
})

/**
 * @swagger
 * /api/v1/aritcles/{id}:
 *  patch:
 *    summary: Update one Articles
 *    tags: [Articles]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The Articles update
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Articles'
 *    responses:
 *      200:
 *        description: The articles was updated
 *      404:
 *        description: The Article was not found
 *      500:
 *        description: Some error happened
 */


route.patch('/:id', uploads.single('image'), authenticate, articleValidation, (req, res, next) => {
    new ArticleController()
        .updateArticle(req, res, next)
})



/**
 * @swagger
 * /api/v1/aritcles/{id}:
 *   delete:
 *     summary: Remove one Articles
 *     tags: [Articles]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Articles one 
 * 
 *     responses:
 *       200:
 *         description: The book was deleted
 *       404:
 *         description: The book was not found
 */


route.delete('/:id', authenticate, (req, res, next) => {
    new ArticleController()
        .deleteArticle(req, res, next)
})

export default route