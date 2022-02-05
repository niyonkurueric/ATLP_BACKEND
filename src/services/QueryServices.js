import query from "../models/query";
export class queryService {
    static async getAllArticles() {
        const queryall = await query.find()
        return queryall
    }
    static async createquery(message) {
        return await message.save()
    }


    static async getArticle(id) {
        const queriesone = await query.findOne({ _id: id })
        return queriesone
    }
}