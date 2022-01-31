import express from 'express'
import { ArticleController } from '../../controllers/articleController'
import multer from 'multer'

// import { fileFilter } from '../../helpers/fileFilter.js';
// import { authenticate } from '../../middlewares/authenticate.js';
import { articleValidation } from '../../validation/articleValidation/article.validation';



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


route.get('/', (req, res, next) => {
    new ArticleController()
        .getAllArticles(req, res, next)
})

route.post('/', uploads.single('image'), articleValidation, (req, res, next) => {
    new ArticleController()
        .createArticle(req, res, next)
})

route.get('/:id', (req, res, next) => {
    new ArticleController()
        .getArticle(req, res, next)
})

route.patch('/:id', (req, res, next) => {
    new ArticleController()
        .updateArticle(req, res, next)
})

route.delete('/:id', (req, res, next) => {
    new ArticleController()
        .deleteArticle(req, res, next)
})

export default route