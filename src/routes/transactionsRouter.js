import { Router } from "express";

//import {transactions, newTransaction} from "../controllers/financialTransactionsController.js";
import {validatingToken} from "../middlewares/tokenMiddleware.js";
import {validatingNewTransaction} from "../middlewares/newTransactionMiddleware.js";
//import {newTransaction} from "../controllers/newTransactionController.js"
//import {transactions} from "../controllers/transactionController.js"

const financialTransactionsRouter = Router();
financialTransactionsRouter.post("/transactions", validatingToken, validatingNewTransaction);//
//financialTransactionsRouter.get("/transactions", validatingToken, transactions);

export default financialTransactionsRouter;