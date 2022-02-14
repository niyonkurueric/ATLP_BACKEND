import joi from 'joi'

export const qwerySchema = joi.object({
    name: joi.string().max(1000).required(),
    content: joi.string().required(),
    email: joi.string().email().required(),
})