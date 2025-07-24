import { Router } from "express";

import { registerUser, loginUser, logoutUser } from '../controllers/User.Controller.js';
import { verifyJWT } from "../middlewares/auth.middleware.js";





const UserRouter = Router();


UserRouter.route('/registeruser').post(registerUser);
UserRouter.route('/loginuser').post(loginUser);
UserRouter.post("/logout", verifyJWT, logoutUser);



export default UserRouter;
