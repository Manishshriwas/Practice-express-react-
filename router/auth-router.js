import express from "express";
import controller from '../controllers/auth-controllers.js';
import validate from '../middlewares/validate-middleware.js';
import signupSchema from '../validators/auth-validator.js';
import loginSchema from '../validators/auth-validator.js';
const router = express.Router();



router.route('/').get(controller.home);

router.route('/register').post(validate(signupSchema),controller.register);
 
router.route('/login').post(validate(loginSchema),controller.login);
  


export default router;