export const swaggerDocument = {
  swagger: '2.0',
  info: {
    description: 'Grades API description',
    version: '1.0.0',
    title: 'Grades API description',
  },
  host: 'backendstudents.herokuapp.com ',
  schemes: ['https'],
  tags: [
    {
      name: 'grade',
      description: 'Grades students',
    },
  ],
  paths: {
    '/grade': {
      get: {
        tags: ['grade'],
        summary: 'Get all grades',
        description: 'Returns all grades',
        produces: ['application/json'],
        responses: {
          200: {
            description: 'Successful operation',
            schema: {
              $ref: '#/definitions/grade',
            },
          },
          500: {
            description: 'Error occurred',
            schema: {
              type: 'object',
              properties: {
                message: {
                  type: 'string',
                },
              },
            },
          },
        },
      },
      post: {
        tags: ['grade'],
        summary: 'Create a new grade',
        description: 'Create a new grade with the received parameters',
        consumes: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'body',
            description: 'Grade object',
            required: true,
            schema: {
              type: 'object',
              required: ['name', 'subject', 'type', 'value'],
              properties: {
                name: {
                  type: 'string',
                  description: "Student's name",
                },
                subject: {
                  type: 'string',
                },
                type: {
                  type: 'string',
                },
                value: {
                  type: 'number',
                  format: 'double',
                  minimum: 0,
                },
              },
            },
          },
        ],
        responses: {
          201: {
            description: 'Successful operation',
            schema: {
              $ref: '#/definitions/grade',
            },
          },
          500: {
            description: 'Error occurred',
            schema: {
              type: 'object',
              properties: {
                message: {
                  type: 'string',
                },
              },
            },
          },
        },
      },
      delete: {
        tags: ['grade'],
        summary: 'Delete all grades',
        description: '',
        produces: ['application/json'],

        responses: {
          200: {
            description: 'Successful operation',
            schema: {
              type: 'object',
              properties: {
                message: {
                  type: 'string',
                },
              },
            },
          },
          500: {
            description: 'Error occurred',
            schema: {
              type: 'object',
              properties: {
                message: {
                  type: 'string',
                },
              },
            },
          },
        },
      },
    },
    '/grade/{id}': {
      get: {
        tags: ['grade'],
        summary: 'Return a grade',
        description: 'Return a grade with the received parameters',
        consumes: ['application/json'],
        parameters: [
          {
            in: 'path',
            name: 'id',
            description: 'ID the grade to return',
            required: true,
            schema: {
              $ref: '#/definitions/grade',
            },
          },
        ],
        responses: {
          200: {
            description: 'Successful operation',
            schema: {
              $ref: '#/definitions/grade',
            },
          },
          500: {
            description: 'Error occurred',
            schema: {
              type: 'object',
              properties: {
                message: {
                  type: 'string',
                },
              },
            },
          },
        },
      },
      put: {
        tags: ['grade'],
        summary: 'Update a grade',
        description: 'Update a grade with the received parameters',
        consumes: ['application/json'],
        parameters: [
          {
            in: 'path',
            name: 'id',
            description: 'ID to update',
            required: true,
            schema: {
              $ref: '#/definitions/grade',
            },
          },
          {
            in: 'body',
            name: 'body',
            description: 'Grade object',
            required: true,
            schema: {
              type: 'object',
              required: ['name', 'subject', 'type', 'value'],
              properties: {
                name: {
                  type: 'string',
                  description: "Student's name",
                },
                subject: {
                  type: 'string',
                },
                type: {
                  type: 'string',
                },
                value: {
                  type: 'number',
                  format: 'double',
                  minimum: 0,
                },
              },
            },
          },
        ],
        responses: {
          400: {
            description: 'Grade validation',
            schema: {
              type: 'object',
              properties: {
                message: {
                  type: 'string',
                },
              },
            },
          },
          200: {
            description: 'Successful operation',
            schema: {
              type: 'object',
              properties: {
                message: {
                  type: 'string',
                },
              },
            },
          },
          500: {
            description: 'Error occurred',
            schema: {
              type: 'object',
              properties: {
                message: {
                  type: 'string',
                },
              },
            },
          },
        },
      },
      delete: {
        tags: ['grade'],
        summary: 'Delete a grade',
        description: 'Delete a grade with the received parameter',
        consumes: ['application/json'],
        parameters: [
          {
            in: 'path',
            name: 'id',
            description: 'ID to delete',
            required: true,
            schema: {
              $ref: '#/definitions/grade',
            },
          },
        ],
        responses: {
          200: {
            description: 'Successful operation',
            schema: {
              type: 'object',
              properties: {
                message: {
                  type: 'string',
                },
              },
            },
          },
          500: {
            description: 'Error occurred',
            schema: {
              type: 'object',
              properties: {
                message: {
                  type: 'string',
                },
              },
            },
          },
        },
      },
    },
  },
  definitions: {
    grade: {
      type: 'object',
      required: ['name', 'subject', 'type', 'value'],
      properties: {
        id: {
          type: 'integer',
          format: 'int64',
        },
        name: {
          type: 'string',
          description: "student's name",
        },
        subject: {
          type: 'string',
        },
        type: {
          type: 'string',
        },
        value: {
          type: 'number',
          format: 'double',
          minimum: 0,
        },
        lastModified: {
          type: 'string',
          format: 'date-time',
        },
      },
    },
  },
};
