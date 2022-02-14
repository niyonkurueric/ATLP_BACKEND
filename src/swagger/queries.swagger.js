import responses from './status'
const query = {
    '/queries': {
        post: {
            summary: 'Sending Message',
            tags: ['Queries'],
            parameters: [{ in: 'body',
                name: 'Queries',
                schema: {
                    example: {
                        name: "your Name",
                        message: "password",
                        email: "Email"
                    }
                },
                required: true,
            }, ],
            consumes: ['application/json'],
            responses,
        },
        get: {
            summary: 'get All Queries',
            tags: ['Queries'],
            security: [{
                JWT: [],
            }, ],
            consumes: [
                'application/json',
            ],
            responses

        },
    },


    '/queries/{Id}': {
        get: {
            summary: 'Get one queries',
            tags: ['Queries'],
            security: [{
                JWT: [],
            }, ],
            parameters: [{ in: 'path',
                name: 'Id',
                required: true,
                schema: {
                    example: "put ID",
                },
            }, ],
            consumes: ['application/json'],
            responses,
        },
    }
};

export default query;