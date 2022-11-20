import express from 'express';
import chalk from 'chalk';
import cors from 'cors';
import dotenv from 'dotenv';

import signUpRouter from './routes/signUpRouter.js';
import signInRouter from './routes/signInRouter.js';
import transactionsRouter from './routes/transactionsRouter.js';
import signOutRouter from './routes/signOutRouter.js';

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

app.use(signUpRouter);
app.use(signInRouter);
app.use(transactionsRouter);
app.use(signOutRouter);

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(chalk.bold.green(`Server running in port: ${port}`))
});

//FINAL VERSION 1.0 of the "API mYWallet"