import Joi from 'joi';

export const signUpSchema = Joi.object({
    name: Joi.string().required().min(3),
    email: Joi.string().required().email(),
    password: Joi.string().required(),
    confirmedPassword: Joi.ref('password'),
});