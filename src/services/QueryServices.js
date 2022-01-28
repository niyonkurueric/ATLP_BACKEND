import query from "../models/query"
export class queryService {

    static async createquery(message) {
        return await message.save()
    }
    static async getallquery() {
        const queryall = await query.find()
        return queryall
    }

    static async getArticle(id) {
        const queriesone = await query.findOne({ _id: id })
        return queriesone
    }

    static async updateQueries(id, info) {
        const queriesup = await query.findOne({ _id: id })
        if (info.name) {
            queriesup.name = info.name
        }
        if (info.content) {
            queriesup.content = info.content
        }
        if (info.email) {
            queriesup.photo = info.email
        }
        await queriesup.save()
        return queriesup
    }
    static async deletequeries(id) {
        return await query.deleteOne({ _id: id })
    }
}