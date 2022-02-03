import express from 'express'
import { QueryController } from '../../controllers/queriesController'

const route = express.Router()



route.get('/', (req, res, next) => {
    new QueryController()
<<<<<<< HEAD
        .getAllArticles(req, res, next)
=======

        .getAllArticles(req, res, next)

>>>>>>> 3088f4b15e477689f11dcb5b0364a567ae621128
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