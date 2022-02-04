import dotenv from "dotenv";
dotenv.config()
export const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "ATLP Niyonkuru",
            description: "This is a backend APIs for my Capstone project",
            version: "1.0.0",
            contact: {
                name: "Niyonkuru Eric",
                email: "niyonkurufamous@gmail.com",
            },
        },
        servers: [{
            url: process.env.DEVELOPMENT_DB,
            name: "Local server",
        }, ],
    },
    apis: ["./routes/api/*.js"],
};