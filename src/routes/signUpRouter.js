import { Router } from "express";
import {signUp} from "../controllers/signUpController.js";

const signUpRouter = Router();
signUpRouter.post("/sign-up", signUp);

export default signUpRouter;