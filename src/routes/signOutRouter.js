import { Router } from "express";

import {validatingToken} from "../middlewares/tokenMiddleware.js";
import {signOut} from "../controllers/signOutController.js";

const signOutRouter = Router();
signOutRouter.delete("/sign-out/:id", validatingToken, signOut);

export default signOutRouter;