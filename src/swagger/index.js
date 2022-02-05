import dotenv from 'dotenv';
import articles from './articles.swagger';
import users from './users.swagger';

dotenv.config();

const host = "localhost:3000";


// process.env.NODE_ENV === 'production' ?
// process.env.BASE_URL.split('https://')[1] :
// process.env.BASE_URL.split('http://')[1];

const paths = {
    ...users,
    ...articles
};

const config = {
    swagger: '2.0',
    info: {
        description: 'My persnal brand and blog API',
        version: '1.0.0',
        title: 'My brand',
    },
    host,
    basePath: '/api/v1',
    schemes: ['http', 'https'],
    securityDefinitions: {
        JWT: {
            type: 'apiKey',
            name: 'Authorization',
            in: 'header',
        },
    },
    paths,
};
export default config;