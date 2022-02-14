import responses from './status'
const articles = {

    '/aritcles': {
        get: {
            tags: ['Articles'],

            summary: 'get All articles',
            consumes: [
                'application/json',
            ],
            responses

        },
        post: {
            summary: 'Add new Article',
            tags: ['Articles'],
            security: [{
                JWT: [],
            }, ],
            parameters: [{ in: 'formData',
                    name: 'image',
                    type: "file",
                    required: true,
                },
                { in: 'formData',
                    name: 'title',
                    type: "string",
                    required: true,
                },
                { in: 'formData',
                    name: 'content',
                    type: "string",
                    required: true,
                },
            ],
            consumes: ['application/json'],
            responses,
        }

    },
    '/aritcles/{Id}': {
        get: {
            summary: 'Get one Articles',
            tags: ['Articles'],
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
        patch: {
            summary: 'Update Articles',
            tags: ['Articles'],
            security: [{
                JWT: [],
            }, ],
            parameters: [{ in: 'path',
                    name: 'Id',
                    required: true,
                },
                { in: 'formData',
                    name: 'image',
                    type: "file",

                },
                { in: 'formData',
                    name: 'title',
                    type: "string",
                },
                { in: 'formData',
                    name: 'content',
                    type: "string",
                },

            ],
            consumes: ['application/json'],
            responses,
        },
        delete: {
            summary: 'Delete Articles',
            tags: ['Articles'],
            parameters: [{ in: 'path',
                name: 'Id',
                required: true,
                schema: {
                    example: "put ID",
                },
            }, ],
            security: [{
                JWT: [],
            }, ],
            consumes: ['application/json'],
            responses,
        },

    }
}

export default articles;