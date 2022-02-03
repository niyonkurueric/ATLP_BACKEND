import express from 'express'
import { QueryController } from '../../controllers/queriesController'
import { authenticate } from '../../middlewares/authenticate.js';
import { articleValidation } from '../../validations/articleValidation/article.validation';


const route = express.Router()



route.get('/', authenticate, articleValidation, (req, res, next) => {
    new QueryController()
        .getAllArticles(req, res, next)
})

route.post('/', (req, res, next) => {

    new QueryController()
        .createquery(req, res, next)
})
route.get('/:id', (req, res, next) => {
    new QueryController()
        .getArticle(req, res, next)
})

route.patch('/:id', (req, res, next) => {
    new QueryController()
        .updateQueries(req, res, next)
})

route.delete('/:id', (req, res, next) => {
    new QueryController()
        .deletequeries(req, res, next)
})
export default route