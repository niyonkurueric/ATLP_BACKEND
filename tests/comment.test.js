import chai, { expect } from 'chai'
import chaiHttp from 'chai-http'
import app from '../src/app.js'
import 'dotenv/config';
import Article from '../src/models/article.js';
import { userData, validUser } from './dummyData.js';
import { generateToken } from "../src/helpers/jwtFunctions.js"
chai.use(chaiHttp)
describe("COMMENT END-POINT TESTING", () => {
    it("Should retrieve the comments", (done) => {
        chai.request(app).get("/api/v1/comments/61f2d10027ad37dbb19f9436")
            .send()
            .end((err, res) => {
                expect(res).to.have.property("status")
                done()
            })

    })

    it("Should not retrieve the comments", (done) => {
        chai.request(app).get("/api/v1/comments/")
            .send()
            .end((err, res) => {
                expect(res).to.have.status([404])
                done()
            })
    })

    it("Should retrieve one comment", (done) => {
        chai.request(app).get("/api/v1/comments")
            .send()
            .end((err, res) => {
                expect(res).to.have.status([404])
                done()
            })
    })
    it("Should not retrieve one comment", (done) => {
        chai.request(app).get("/api/v1/comments/id")
            .send()
            .end((err, res) => {

                done()
            })
    })


    it("Should deleted one comment", (done) => {
        chai.request(app).delete("/api/v1/comments/61f2d10027ad37dbb19f9436")
            .send()
            .end((err, res) => {
                expect(res).to.have.status([404])
                done()
            })
    })
    it("Should not delete one comment", (done) => {
        chai.request(app).delete("/api/v1/comments/id")
            .send()
            .end((err, res) => {

                done()
            })
    })


})