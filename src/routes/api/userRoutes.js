import express from 'express'
import { UserController } from '../../controllers/userController'

const route = express.Router()

// route.get('/', (req, res, next) => {
//     new UserController().getAllUsers(req, res, next)
// })

route.post('/', (req, res, next) => {
    new UserController().createUser(req, res, next)
})

export default route