import express from 'express'
import welcomeRoutes from "./api/welcomeRoutes"
import articleRoutes from "./api/articleRoutes"
import queriesRoutes from "./api/queriesRoutes"
import commentRoutes from "./api/commentRoutes"
import userRoutes from "./api/userRoutes"

const routes = express.Router()

routes.use('/', welcomeRoutes)
routes.use('/aritcles', articleRoutes)
routes.use('/comments', commentRoutes)
routes.use('/queries', queriesRoutes)
routes.use('/user', userRoutes)

export default routes