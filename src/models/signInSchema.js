import Joi from 'joi';

export const signInSchema = Joi.object({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
});