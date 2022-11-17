import bcrypt from 'bcrypt';
import {v4 as uuid} from 'uuid';

import db from "../../database.js";

export async function signIn(req, res) {
    const { email, password } = req.body;

    try {
        const user = await db.collection('users').findOne({ email });

        if(user && bcrypt.compareSync(password, user.password)) {
            const token = uuid();
            await db.collection("sessions").insertOne({userId: user._id, token});
            res.status(200).send({name: user.name, token});
        } else (
            res.sendStatus(500)
        )

    } catch (err) {
        return res.status(500).send(err);
    }
}