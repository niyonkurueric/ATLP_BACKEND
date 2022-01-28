import express from 'express'
import welcomeRoutes from "./api/welcomeRoutes"
import articleRoutes from "./api/articleRoutes"

import userRoutes from "./api/userRoutes"

const routes = express.Router()

routes.use('/', welcomeRoutes)
routes.use('/aritcles', articleRoutes)

routes.use('/user', userRoutes)

export default routes