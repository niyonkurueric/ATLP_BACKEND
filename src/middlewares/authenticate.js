import 'dotenv/config';
import jwt from 'jsonwebtoken';

export const authenticate = async(req, res, next) => {
    try {
        const token = req.headers.authorization
        await jwt.verify(token, process.env.JWT_SECRETE);
        next();
    } catch (error) {
        return res.status(401).json({
            status: 401,
            error: "Please login it seems you are not logged in"
        })
    }
}