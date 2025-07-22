import { Router } from "express";
import { registerUser, loginUser, logoutUser } from '../controllers/User.Controller.js';
import { verifyJWT } from "../middlewares/auth.middleware.js";



const UserRouter = Router();



UserRouter.post("/register", registerUser);
UserRouter.post("/login", loginUser);
UserRouter.post("/logout", verifyJWT, logoutUser);



export default UserRouter;