import { Router } from "express";
import {signUp} from "../controllers/signUpController.js";
import {validatingSignUp} from "../middlewares/signUpMiddleware.js";

const signUpRouter = Router();
signUpRouter.post("/sign-up", validatingSignUp, signUp);

export default signUpRouter;