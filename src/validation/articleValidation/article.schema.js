import joi from 'joi'

export const articleSchema = joi.object({
    title: joi.string().regex(/^[a-zA-Z]{3,130}$/).min(3).max(1030).required(),
    content: joi.string().required(),
})