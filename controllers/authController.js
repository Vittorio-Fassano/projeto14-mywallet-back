import bcrypt from 'bcrypt';
import {v4 as uuid} from 'uuid';

import db from "../database.js";

async function signUp(req, res) {
    const { name, email, password } = req.body;
    const passwordHash = bcrypt.hashSync(password, 10);

    try {
        await db.collection("users").insertOne({ name, email, password: passwordHash, confirmedPassword: passwordHash });
        res.sendStatus(201);
    } catch (err) {
        return res.status(500).send(err);
    }
}

async function signIn(req, res) {
    const { email, password } = req.body;

    try {
        const user = await db.collection('users').findOne({ email });

        if(user && bcrypt.compareSync(password, user.password)) {
            const token = uuid();
            const sessions = await db.collection("sessions").insertOne({userId: user._id, token});
            console.log(sessions);
            res.status(200).send({name: user.name, token});
        } else (
            res.sendStatus(500)
        )

    } catch (err) {
        return res.status(500).send(err);
    }
}

export {signUp, signIn}; 