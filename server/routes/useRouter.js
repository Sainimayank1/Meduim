import express from "express";
import { registeration , registerValidation} from "../controller/UserRegisteration.js";
import {loginValidation , login} from "../controller/UserLogin.js";
import UserCreatePost from "../controller/UserCreatePost.js";
import auth from "../utlis/auth.js";
import fetchPost from "../controller/fetchPost.js";
const router = express.Router();




//          REDIRECT TO USERRIGESTRATION CONTROLLER


router.post("/register", registerValidation, registeration)
router.post("/login", loginValidation, login)



router.post('/create_post',auth,UserCreatePost)
router.get('/posts/:id', auth, fetchPost);

export default router;

