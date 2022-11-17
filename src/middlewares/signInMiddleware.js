import Joi from 'joi';
import bcrypt from 'bcrypt';

import db from "../../database.js";

export async function validatingSignIn (req, res, next) {
    const { email, password} = req.body;

    const signInSchema = Joi.object({
        email: Joi.string().required().email(),
        password: Joi.string().required(),
    });

    const { error } = signInSchema.validate(req.body, { abortEarly: false }); 

    if(error) {
        const errors = error.details.map((detail) => detail.message);
        console.log(errors);
        return res.status(400).send(errors);
    }

    try {
        const user =  await db.collection("users").findOne({email});
        const validatingPassword = user && bcrypt.compareSync(password, user.password);

        if(user === null || !validatingPassword) {
            return res.status(409).send("incorrect data");
        }
        res.locals.user = user; /*pass data between middlewares, 
                                  in this case store the valitaded user data to use in the signIn function*/

        next(); //validation confirmed, can move to the next function, in this case it's the signIn control function

    } catch (err) {
        console.log(err)
        return res.sendStatus(500);
    }
}