import { Router } from "express";

import {validatingToken} from "../middlewares/tokenMiddleware.js";
import {validatingNewTransaction} from "../middlewares/newTransactionMiddleware.js";
import {newTransaction} from "../controllers/newTransactionController.js"
import {updateTransaction} from "../controllers/updateTransactionController.js"
import {deleteTransaction} from "../controllers/deleteTransactionController.js"
import {transactions} from "../controllers/transactionsController.js"

const financialTransactionsRouter = Router();
financialTransactionsRouter.post("/transactions", validatingToken, validatingNewTransaction, newTransaction); //Create 
financialTransactionsRouter.put("/transactions/:id", validatingToken, validatingNewTransaction, updateTransaction); 
financialTransactionsRouter.delete("/transactions/:id", validatingToken, deleteTransaction);//Update
financialTransactionsRouter.get("/transactions", validatingToken, transactions); //Read
//CRUD

export default financialTransactionsRouter;