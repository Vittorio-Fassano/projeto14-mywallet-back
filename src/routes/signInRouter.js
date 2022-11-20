import { Router } from "express";

import {signIn} from "../controllers/signInController.js";
import {validatingSignIn} from "../middlewares/signInMiddleware.js";

const signInRouter = Router();
signInRouter.post("/", validatingSignIn, signIn);

export default signInRouter;