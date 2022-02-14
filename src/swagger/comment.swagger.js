import responses from './status'
const comments = {
    '/comments/{Id}': {
        get: {
            summary: 'Get one comments',
            tags: ['Comments'],
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
        post: {
            summary: 'create new comment',
            tags: ['Comments'],
            parameters: [{ in: 'path',
                    name: 'Id',
                    required: true,
                    schema: {
                        example: 1,
                    },
                },
                { in: 'body',
                    name: 'name',
                    required: true,
                    schema: {
                        example: {
                            name: 'niyonkuru',
                            comments: 'comment',
                        },
                    },
                },

            ],
            consumes: ['application/json'],
            responses,
        }
    },
};

export default comments;