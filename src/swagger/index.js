import dotenv from 'dotenv';
import articles from './articles.swagger';
import users from './users.swagger';
import queries from './queries.swagger';
import comments from './comment.swagger';

dotenv.config();

const host = process.env.BASE_URL;


const paths = {
    ...users,
    ...articles,
    ...queries,
    ...comments
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