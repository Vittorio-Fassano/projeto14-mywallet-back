import bcrypt from 'bcrypt';

import {usersCollection} from "../../database.js";

export async function signUp(req, res) {
    const { name, email, password} = req.body;
    const passwordHash = bcrypt.hashSync(password, 10);

    try {
        await usersCollection.insertOne({ name, email, password: passwordHash });
        res.sendStatus(201);
    } catch (err) {
        return res.status(500).send(err);
    }
}