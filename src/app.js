import express from "express"
import mongoose from "mongoose"
import routes from "./routes"
import 'dotenv/config'
import cors from "cors"
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import swaggerOptions from "./swagger";


const app = express()

app.use(cors())
const port = process.env.PORT || 3000
const mode = process.env.NODE_ENV || 'development'
    // const server = async() => {


try {
    if (mode === "development") {
        mongoose.connect(process.env.DEVELOPMENT_DB, { useNewUrlParser: true })
    } else if (mode === "test") {
        mongoose.connect(process.env.TEST_DB, { useNewUrlParser: true })
    } else if (mode === "production") {
        mongoose.connect(process.env.PRODUCTION_DB, { useNewUrlParser: true })
    }
    app.use(express.json())
    app.use(morgan('dev'));
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerOptions));
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