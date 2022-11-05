import express from "express";
import { registeration , registerValidation } from "../controller/UserRegisteration.js";
const router = express.Router();




//          REDIRECT TO USERRIGESTRATION CONTROLLER
router.post("/register", registerValidation, registeration)

export default router;

