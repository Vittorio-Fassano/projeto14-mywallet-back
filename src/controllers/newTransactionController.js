import dayjs from "dayjs";

import {transactionsCollection} from "../database/db.js";

export async function newTransaction (req, res) {
    const {value, description, type} = req.body 

    const {user} = res.locals;

    try {
        const newTransaction = {
            value,
            description,
            type,
            user: user.name,
            date: dayjs(Date.now()).format("DD/MM"),
        }
        
        await transactionsCollection.insertOne(newTransaction);

        res.status(200).send(newTransaction);
        
    } catch (err) {
        console.log(err);
        return res.sendStatus(500);
    }
}