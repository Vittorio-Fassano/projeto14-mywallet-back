import {ObjectId} from 'mongodb';

import {transactionsCollection} from "../database/db.js";


export async function deleteTransaction (req, res) {
    const {id} = req.params;

    try {
        const findTransaction = await transactionsCollection.findOne({_id: new ObjectId(id)});
        if (!findTransaction) { return res.sendStatus(404) };
        await transactionsCollection.deleteOne({_id: findTransaction._id});
        res.sendStatus(200);

    } catch (err) {
        console.log(err);
        return res.sendStatus(500);
    }
};