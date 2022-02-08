import chai, { expect } from 'chai'
import chaiHttp from 'chai-http'
import app from '../src/app.js'
import 'dotenv/config';
import { userData, validUser } from './dummyData.js';
import User from "../src/models/user.js"

import { generateToken } from "../src/helpers/jwtFunctions.js"

chai.use(chaiHttp)
describe("QUERY END-POINT TESTING", () => {
    before(async() => {
        await User.deleteOne({ email: userData.email })
    })
    it("It should register the user", (done) => {
        chai.request(app).post("/api/v1/user/register")
            .send(userData)
            .end((err, res) => {
                console.log("user\n\n\n", res.body)
                expect(res).to.have.status([201])
                done()
            })
    })
    let token = ""
    it("While logged in Should retrieve the queries", (done) => {
        chai.request(app).get("/api/v1/queries")
            .set('authorization', `Bearer ${token}`)
            .send()
            .end((err, res) => {
                expect(res).to.have.property("status")
                done()
            })
    })
    it("while not logged in, should not retrieve the queries", (done) => {
        chai.request(app).get("/api/v1/queries/")
            .send()
            .end((err, res) => {
                expect(res.body).to.have.property("error")
                expect(res).to.have.status([401])
                done()
            })
    })
    it("Should not retrieve the queries", (done) => {
        chai.request(app).get("/api/v1/qeury/")
            .send()
            .end((err, res) => {
                expect(res).to.have.status([404])
                done()
            })
    })
})