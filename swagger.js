import dotenv from "dotenv";
dotenv.config()
export const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "ATLP BRAND PROJECT",
            description: "This is a backend APIs for my  project",
            version: "1.0.0",
            contact: {
                name: "Niyonkuru Eric",
                email: "niyonkurufamous@gmail.com",
            },
        },
        servers: [{
            url: "http://localhost:3000",
            name: "Local server",
        }, ],
    },
    apis: ["./src/routes/api/*.js"],
};