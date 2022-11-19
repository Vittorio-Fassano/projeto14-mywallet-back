import Joi from 'joi';

export const newTransactionSchema = Joi.object ({
    value: Joi.string().regex(/^[0-9]\d*(\.\d+)?$/).required(),
    description: Joi.string().min(3).max(20),
    type: Joi.valid("new entry", "new exit") 
})