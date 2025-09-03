import express from "express";

import controller from "../controllers/contact-controller.js"

const router=express.Router();

router.route('/contact').post(controller);

export default router;