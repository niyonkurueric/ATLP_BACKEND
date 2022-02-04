import express from "express"
import mongoose from "mongoose"
import routes from "./routes"
import 'dotenv/config'

import swaggerUi from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import { swaggerOptions } from "./swagger.js";

const app = express()

const port = process.env.PORT || 3000
const mode = process.env.NODE_ENV || 'development'
    // const server = async() => {


try {
    if (mode === "development") {
        mongoose.connect(process.env.DEVELOPMENT_DB, { useNewUrlParser: true })
    } else if (mode === "test") {
        mongoose.connect(process.env.TEST_DB, { useNewUrlParser: true })
    } else if (mode === "production") {
        mongoose.connect("process.env.PRODUCTION_DB", { useNewUrlParser: true })
    }
    app.use(express.json())
    const swaggerSpec = swaggerJsDoc(swaggerOptions);
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    app.use("/api/v1/", routes)
    app.listen(port, () => {
        console.log(`The server is running on port ${port}`)
    })
} catch (error) {
    console.log(error)
}
// }
// server()
export default app