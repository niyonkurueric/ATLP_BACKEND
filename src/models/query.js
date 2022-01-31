import mongoose from 'mongoose'
const queries = mongoose.Schema({
    name: { type: String, require: true },
    content: { type: String, require: true },
    email: { type: String, require: true },
    created_on: { type: Date, default: Date.now }
});
const Query = mongoose.model('Queries', queries)
export default Query