import bcrypt from 'bcrypt';

import db from "../database.js";

async function signUp(req, res) {
    const { name, email, password } = req.body;
    const passwordHash = bcrypt.hashSync(password, 10);

    try {
        await db.collection("users").insertOne({ name, email, password: passwordHash, confirmedPassword: passwordHash });
        res.sendStatus(201);
    } catch (err) {
        res.status(500).send(err);
        return;
    }
}

export {signUp};