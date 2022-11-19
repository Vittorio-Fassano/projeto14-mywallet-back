import { Router } from "express";

import {signIn} from "../controllers/signInController.js";
import {validatingSignIn} from "../middlewares/signInMiddleware.js";

const signInRouter = Router();
signInRouter.post("/sign-in", validatingSignIn, signIn);

export default signInRouter;