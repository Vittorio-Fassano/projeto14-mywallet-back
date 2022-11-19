import dayjs from "dayjs";
import {ObjectId} from 'mongodb';
import {transactionsCollection} from "../database/db.js";

export async function updateTransaction  (req, res) {
    const {value, description} = req.body;
    const {id} = req.params;
    
    try {
        const findTransaction = await transactionsCollection.findOne({_id: new ObjectId(id)});
        console.log(findTransaction);

        await transactionsCollection.updateOne({_id: findTransaction._id }, {
            $set: {value, description, date: dayjs(Date.now()).format("DD/MM")}
        });
        res.sendStatus(200);
        
    } catch (err) {
        console.log(err);
        return res.sendStatus(500);
    }
}