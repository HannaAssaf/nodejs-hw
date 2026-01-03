import swaggerJSDoc from 'swagger-jsdoc';

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',

    info: {
      title: 'Note API',
      version: '1.0.0',
      description: 'API documentation for Node.js project',
    },

    servers: [
      {
        url: process.env.PUBLIC_URL || 'http://localhost:3000',
      },
    ],

    security: [
      {
        bearerAuth: [],
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },

      schemas: {
        User: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              example: '64f1c9a2e4b0a1234567890a',
            },
            name: {
              type: 'string',
              example: 'Hanna',
            },
            email: {
              type: 'string',
              example: 'user@example.com',
            },
            avatarURL: {
              type: 'string',
              example: 'https://example.com/avatar.png',
            },
          },
        },

        AuthResponse: {
          type: 'object',
          properties: {
            accessToken: {
              type: 'string',
              example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
            },
            refreshToken: {
              type: 'string',
              example: 'def50200a1b2c3...',
            },
            user: {
              $ref: '#/components/schemas/User',
            },
          },
        },

        Error: {
          type: 'object',
          properties: {
            message: {
              type: 'string',
              example: 'Invalid credentials',
            },
          },
        },
      },
    },
  },

  apis: ['./src/routes/**/*.js'],
};

export const swaggerSpec = swaggerJSDoc(swaggerOptions);
