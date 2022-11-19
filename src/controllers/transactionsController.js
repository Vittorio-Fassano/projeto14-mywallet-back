import {transactionsCollection} from "../database/db.js";

export async function transactions(req, res) {
    const { user } = res.locals;

    try {
        const transactions = await transactionsCollection.find({ user: user.name }).toArray();
        res.status(200).send(transactions);

    } catch (error) {
        console.log(error);
        res.sendStatus(500);
        return;
    }
}