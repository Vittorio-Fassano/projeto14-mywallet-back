import {v4 as uuid} from 'uuid';

import {sessionsCollection} from "../../database.js";

export async function signIn(req, res) { /*every time you login, a new token is created, 
                                           consequently, a new session is created*/
    try {
        const token = uuid();
        const {user} = res.locals; //get validated user data

        await sessionsCollection.insertOne({userId: user._id, token});
        res.status(200).send({name: user.name, token}); //sends the validated data to be used in the front-end

    } catch (err) {
            return res.status(500).send(err);
        }
}