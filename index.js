import express from 'express';
import chalk from 'chalk';
import cors from 'cors';
import dotenv from 'dotenv';



const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();



const port = process.env.PORT;
app.listen(port, () => {
    console.log(chalk.bold.green(`Server running in port: ${port}`))
});