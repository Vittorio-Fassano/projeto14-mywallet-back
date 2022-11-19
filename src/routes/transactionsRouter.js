import { Router } from "express";

import {validatingToken} from "../middlewares/tokenMiddleware.js";
import {validatingNewTransaction} from "../middlewares/newTransactionMiddleware.js";
import {newTransaction} from "../controllers/newTransactionController.js"
import {transactions} from "../controllers/transactionsController.js"

const financialTransactionsRouter = Router();
financialTransactionsRouter.post("/transactions", validatingToken, validatingNewTransaction, newTransaction);//
financialTransactionsRouter.get("/transactions", validatingToken, transactions);

export default financialTransactionsRouter;