import express from 'express'
import { QueryController } from '../../controllers/queriesController'

const route = express.Router()



route.get('/', (req, res, next) => {
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