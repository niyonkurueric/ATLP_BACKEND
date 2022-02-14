import express from 'express'

import { authenticate } from '../../middlewares/authenticate.js';
import { queryValidation } from '../../validations/queryValidation/query.validation';
import { QueryController } from '../../controllers/queriesController';

const route = express.Router()

route.get('/', authenticate, (req, res, next) => {
    new QueryController()
        .getAllArticles(req, res, next)
})


route.post('/', (req, res, next) => {

    new QueryController()
        .createquery(req, res, next)
})

route.get('/:id', authenticate, (req, res, next) => {
    new QueryController()
        .getArticle(req, res, next)
})
export default route