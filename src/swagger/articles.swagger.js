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
    }
};

export default articles;