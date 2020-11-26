const express = require('express');
const { createValidator } = require('express-joi-validation');
const Joi = require('@hapi/joi');
const userController = require('../../controllers/userController');
const router = express.Router();
const validator = createValidator({ passError: true });

/**
 * @swagger
 * /api/v1/auth/login:
 *  post:
 *   tags: ["user"]
 *   summary: user register api
 *   description: api used to register users
 *   parameters:
 *      - in: body
 *        name: user
 *        description: The user to create.
 *        schema:
 *         type: object
 *         required:
 *          - user signup
 *         properties:
 *           email:
 *             type: string
 *             required:
 *           password:
 *             type: string
 *             required:

 *   responses:
 *    "200":
 *     description: success
 */
const loginSchema = Joi.object({
    email: Joi.string()
        .email()
        .required()
        .label("Email")
        .trim(),
    password: Joi.string()
        .required()
        .trim()
        .label("Password")
});

router.post('/', validator.body(loginSchema, {
        joi: { convert: true, allowUnknown: false }
}), userController.login);

module.exports = router;