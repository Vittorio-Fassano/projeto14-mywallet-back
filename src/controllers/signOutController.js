import {ObjectId} from 'mongodb';

import {sessionsCollection} from "../database/db.js";

export async function signOut (req, res) {
    const {id} = req.params;
    
    try {
        const findSession = await sessionsCollection.findOne({_id: new ObjectId(id)});
        if (!findSession) { return res.sendStatus(404) };
        
        await sessionsCollection.deleteOne({_id: findSession._id});
        console.log(findSession);
        res.sendStatus(200);

    } catch (err) {
        console.log(err);
        return res.sendStatus(500);
    }
}