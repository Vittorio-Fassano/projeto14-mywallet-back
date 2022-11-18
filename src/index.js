import express from 'express';
import chalk from 'chalk';
import cors from 'cors';
import dotenv from 'dotenv';

import signUpRouter from './routes/signUpRouter.js';
import signInRouter from './routes/signInRouter.js';
import financialTransactionsRouter from './routes/financialTransactionsRouter.js';

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

app.use(signUpRouter);
app.use(signInRouter);
app.use(financialTransactionsRouter);

const port = process.env.PORT;
app.listen(port, () => {
    console.log(chalk.bold.green(`Server running in port: ${port}`))
});