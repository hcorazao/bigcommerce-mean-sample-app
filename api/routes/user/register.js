const express = require('express');
const { createValidator } = require('express-joi-validation');
const Joi = require('@hapi/joi');
const userController = require('../../controllers/userController');
const router = express.Router();
const validator = createValidator({ passError: true });

/**
 * @swagger
 * /api/v1/auth/register:
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
 *           firstName:
 *             type: string
 *             required:
 *           lastName:
 *             type: string
 *           email:
 *             type: string
 *             required:
 *           password:
 *             type: string
 *             required:
 *           storeName:
 *             type: string
 *             required:
 *           businessSize:
 *             type: string
 *             required:

 *   responses:
 *    "200":
 *     description: success
 */
const regiterSchema = Joi.object({
    firstName: Joi.string()
        .required()
        .label("User first name")
        .trim(),
    lastName: Joi.string()
        .label("User last name")
        .trim(),
    email: Joi.string()
        .email()
        .required()
        .label("Email")
        .trim(),
    password: Joi.string()
        .required()
        .trim()
        .label("Password"),
    storeName: Joi.string()
        .required()
        .trim()
        .label("Password"),
    businessSize: Joi.string()
        .required()
        .trim()
        .label("Password")
});

router.post('/', validator.body(regiterSchema, {
        joi: { convert: true, allowUnknown: false }
}), userController.signup);

module.exports = router;