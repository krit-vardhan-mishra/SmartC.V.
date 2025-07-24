import { Router } from "express";
import { loginUser, registerUser } from "../controllers/User.Controller.js";



const UserRouter = Router();


UserRouter.route('/registeruser').post(registerUser);
UserRouter.route('/loginuser').post(loginUser);

export default UserRouter;