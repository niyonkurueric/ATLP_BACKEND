import express from 'express'
import welcomeRoutes from "./api/welcomeRoutes"
import articleRoutes from "./api/articleRoutes"
import queriesRoutes from "./api/queriesRoutes"
<<<<<<< HEAD
import commentRoutes from "./api/commentRoutes"
=======

import commentRoutes from "./api/commentRoutes"

>>>>>>> 3088f4b15e477689f11dcb5b0364a567ae621128
import userRoutes from "./api/userRoutes"
// npm install chai chai-http coveralls mocha nyc sinon 
const routes = express.Router()

routes.use('/', welcomeRoutes)
routes.use('/aritcles', articleRoutes)
<<<<<<< HEAD
routes.use('/comments', commentRoutes)
=======

routes.use('/comments', commentRoutes)

>>>>>>> 3088f4b15e477689f11dcb5b0364a567ae621128
routes.use('/queries', queriesRoutes)
routes.use('/user', userRoutes)

export default routes