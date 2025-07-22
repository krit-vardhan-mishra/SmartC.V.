import { Router } from "express";
import { LoginUser, registerUser } from "../controllers/User.Controller";

const UserRouter = Router();



UserRouter.route('/registeruser').post(registerUser);
UserRouter.route('/loginuser').post(LoginUser);

export default UserRouter;