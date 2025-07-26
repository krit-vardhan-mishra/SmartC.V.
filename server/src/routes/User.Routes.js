import { Router } from "express";

import { registerUser, loginUser, logoutUser, updateResume, downloadResume } from '../controllers/User.Controller.js';
import { verifyJWT } from "../middlewares/auth.middleware.js";





const UserRouter = Router();


UserRouter.route('/registeruser').post(registerUser);
UserRouter.route('/loginuser').post(loginUser);
UserRouter.post("/logout", verifyJWT, logoutUser);
UserRouter.put("/updateresume/:id", verifyJWT, updateResume);
UserRouter.route('/downloadresume/:id/download').get(verifyJWT, downloadResume);


export default UserRouter;
