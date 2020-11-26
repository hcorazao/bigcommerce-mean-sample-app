const swaggerJsDocs = require('swagger-jsdoc');

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: '',
            version: '1.0',
            description: 'All api end points',
            contact: {
                name: ''
            },
            servers: ['http://localhost:3000']
        },
        securityDefinitions: {
            bearerAuth: {
                type: 'apiKey',
                name: 'authorization',
                scheme: 'bearer',
                in: 'header',
            },
        },
        produces: ["application/json"]
    },
    apis: [
        './api/routes/*.js',
        './api/routes/*/*.js',
    ]
};

module.exports = swaggerJsDocs(swaggerOptions);