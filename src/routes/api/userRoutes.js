import express from 'express'
import multer from 'multer';
import { UserControllers } from '../../controllers/userController.js';
import { fileFilter } from '../../helpers/fileFilter.js';
import { userValidation } from '../../validations/userValidation/user.validation.js';

const route = express.Router()



/**
 * @swagger
 * components:
 *   schemas:
 *     user:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           description: email
 *         password:
 *           type: string
 *           description: The password
 *         
 *       example:
 *         email: niyonkuru
 *         password: password
 */



const storage = multer.diskStorage({});

const uploads = multer({ storage, fileFilter });
const userControllers = new UserControllers()

/**
 * @swagger
 * /api/v1/user/register:
 *   post:
 *     summary: Create a new User
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/user'
 *     responses:
 *       200:
 *         description: The comments was successfully created
 *         
 *       500:
 *         description: Some server error
 */



route.post('/register', uploads.single('picture'), userValidation, userControllers.register)
    /**
     * @swagger
     * /api/v1/user/login:
     *   post:
     *     summary: login
     *     tags: [User]
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/user'
     *     responses:
     *       200:
     *         description: welcome to login
     *         
     *       500:
     *         description: Some server error
     */

route.post('/login', uploads.single(''), userValidation, userControllers.login)

export default route