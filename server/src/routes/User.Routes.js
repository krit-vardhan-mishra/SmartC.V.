import { Router } from "express";
import { registerUser, loginUser, logoutUser } from '../controllers/User.Controller.js';



const UserRouter = Router();



UserRouter.route('/registerUser').post(registerUser);
UserRouter.route('/loginUser').post(loginUser);
UserRouter.route('/logoutUser').get(logoutUser);

export default UserRouter;