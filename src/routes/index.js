import express from 'express'
import welcomeRoutes from "./api/welcomeRoutes"

import queriesRoutes from "./api/queriesRoutes"
import userRoutes from "./api/userRoutes"

const routes = express.Router()

routes.use('/', welcomeRoutes)

routes.use('/queries', queriesRoutes)
routes.use('/user', userRoutes)

export default routes