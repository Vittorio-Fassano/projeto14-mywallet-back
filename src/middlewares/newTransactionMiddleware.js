//import Joi from 'joi';

import {newTransactionSchema} from "../models/newTransactionSchema.js";

export async function validatingNewTransaction(req, res, next) {
    const { value, description, type } = req.body;

    const { error } = newTransactionSchema.validate(req.body, { abortEarly: false });  

    if(error) {
        const errors = error.details.map((detail) => detail.message);
        return res.status(400).send(errors);
    }

    res.send("this function is the last one done so far, so we sent a direct SEND to the CLIENT");
    //after doing the "newTransaction controller", we remove this send and add the next()
    
    //next(); = move to the next function, in this case it's the NewTransaction controller function
}