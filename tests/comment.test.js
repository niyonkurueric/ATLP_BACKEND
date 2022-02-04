import chai, { expect } from 'chai'
import chaiHttp from 'chai-http'
import app from '../src/app.js'
import 'dotenv/config';

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
})