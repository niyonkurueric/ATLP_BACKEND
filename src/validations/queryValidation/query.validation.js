import { userSchema } from "./queriesy.schema";

export const queryValidation = async(req, res, next) => {
    const value = await querySchema.validate(req.body);
    if (value.error) {
        res.json({
            error: 404,
            message: value.error.details[0].message.replaceAll("\"", "")
        })
    } else {
        next();
    }
}