import express from 'express'
import { ArticleController } from '../../controllers/articleController'

const route = express.Router()

route.get('/', (req, res, next) => {
    new ArticleController().getAllArticles(req, res, next)
})

route.post('/', (req, res, next) => {
    new ArticleController().createArticle(req, res, next)
})

route.get('/:id', (req, res, next) => {
    new ArticleController().getArticle(req, res, next)
})

route.patch('/:id', (req, res, next) => {
    new ArticleController().updateArticle(req, res, next)
})

route.delete('/:id', (req, res, next) => {
    new ArticleController().deleteArticle(req, res, next)
})

export default route