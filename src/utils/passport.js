import jwt from 'jsonwebtoken';
export const generateToken = user => {
    const expiresIn = '1d';
    const payload = {
        name: user.name,
        email: user.email,
        userId: user._id
    }
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: expiresIn });
}