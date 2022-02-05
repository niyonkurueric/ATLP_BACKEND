import responses from './status'
const users = {
    '/user/login': {
        post: {
            summary: 'login',
            tags: ['users'],
            parameters: [{ in: 'body',
                name: 'credentials',
                schema: {
                    example: {
                        email: "n@gmail",
                        password: "password"
                    }
                },
                required: true,
            }, ],
            consumes: ['application/json'],
            responses,
        }

    },
};

export default users;