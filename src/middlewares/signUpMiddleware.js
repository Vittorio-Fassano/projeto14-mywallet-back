import Joi from 'joi';

import {usersCollection} from "../database/db.js";

export async function validatingSignUp (req, res, next) {
    const { name, email, password, confirmedPassword } = req.body;

    const signUpSchema = Joi.object({
        name: Joi.string().required().min(3),
        email: Joi.string().required().email(),
        password: Joi.string().required(),
        confirmedPassword: Joi.ref('password'),
    });

    const { error } = signUpSchema.validate(req.body, { abortEarly: false });  

    if(error) {
        const errors = error.details.map((detail) => detail.message);
        console.log(errors);
        return res.status(400).send(errors);
    }

    try {
        const emailAlreadyExist = await usersCollection.findOne({email});
        const userAlreadyExist = await usersCollection.findOne({name});

        if (emailAlreadyExist) { return res.status(409).send("This email already exists");}
        if (userAlreadyExist) { return res.status(409).send("This username already exists");}

        next(); //validation confirmed, can move to the next function, in this case it is the signUp control function

    } catch (err) {
        console.log(err)
        return res.sendStatus(500);
    }
}