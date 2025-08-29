import express from "express";
import controller from '../controllers/auth-controllers.js';

const router = express.Router();


router.route('/').get(controller.home);

router.route('/register').post(controller.register);

router.route('/login').post(controller.login);



export default router;