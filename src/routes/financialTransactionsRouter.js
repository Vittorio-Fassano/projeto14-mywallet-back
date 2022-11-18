import { Router } from "express";

//import {transactions, newTransaction} from "../controllers/financialTransactionsController.js";
import {validatingToken} from "../middlewares/financialTransactionsMiddleware.js"; //, validatingNewTransaction

const financialTransactionsRouter = Router();
financialTransactionsRouter.post("/transactions", validatingToken); //,validatingNewTransaction, newTransaction;
//financialTransactionsRouter.get("/transactions", validatingToken, transactions);

export default financialTransactionsRouter;