import mongoose from "mongoose"

const opts = {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
};
const schema = mongoose.Schema({
        articleId: String,
        name: String,
        comment: String,
    },
    opts
)

export default mongoose.model("Comment", schema)