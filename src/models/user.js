import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    name: String,
    username: String,
    email: String,
    password: String,
    created_on: { type: Date, default: Date.now }
})
const User = mongoose
    .model('User', userSchema)
export default User