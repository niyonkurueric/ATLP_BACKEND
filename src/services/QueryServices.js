import query from "../models/query"
export class queryService {

    static async createquery(message) {
        return await message.save()
    }
<<<<<<< HEAD
    static async getAllArticles() {
=======

    static async getAllArticles() {

>>>>>>> 3088f4b15e477689f11dcb5b0364a567ae621128
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