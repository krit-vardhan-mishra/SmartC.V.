import { Router } from "express";

import { registerUser, loginUser, logoutUser, updateResume, downloadResume } from '../controllers/User.Controller.js';
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { loginValidator, registerValidator } from "../middlewares/Validators.js";





const UserRouter = Router();


UserRouter.route('/register').post(registerValidator,registerUser);
UserRouter.route('/login').post(loginValidator,loginUser);
UserRouter.post("/logout", verifyJWT, logoutUser);
UserRouter.put("/updateresume/:id", verifyJWT, updateResume);
UserRouter.route('/downloadresume/:id/download').get(verifyJWT, downloadResume);


export default UserRouter;
