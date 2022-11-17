import { Router } from "express";
import {signIn} from "../controllers/signInController.js";

const signInRouter = Router();
signInRouter.post("/sign-in", signIn);

export default signInRouter;