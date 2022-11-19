import Joi from 'joi';

export const newTransactionSchema = Joi.object ({
    value: Joi.number().positive().required(),
    description: Joi.string().min(3).max(20),
    type: Joi.valid("new entry", "new exit") 
})
//.string().regex(/^[0-9]\d*(\,\d+)?$/) = if you want to use regex instead of number