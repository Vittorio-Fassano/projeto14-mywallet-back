import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import chalk from 'chalk';

dotenv.config();

const mongoClient = new MongoClient(process.env.MONGO_URI);

try {
    await mongoClient.connect();
    console.log(chalk.bold.green("MongoDb is connected"));
} catch (err) {
    console.log(chalk.bold.red("Error connecting with mongoDb", err));
}

const database = process.env.MONGO_DB;
let db = null;

try {
    db = mongoClient.db(database);
    console.log(chalk.bold.green("Database is connected"));
} catch (err) {
    console.log(chalk.bold.red("Error connecting with database", err));
}

export default db