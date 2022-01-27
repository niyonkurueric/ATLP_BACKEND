import mongoose from 'mongoose'
const articleSchema = mongoose.Schema({
    title: { type: String, required: true },
    photo: { type: String },
    content: { type: String, required: true },
    likes: { type: Number, default: 0 }
})
const Article = mongoose.model('Article', articleSchema)
export default Article