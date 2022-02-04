import chai, { expect } from 'chai'
import chaiHttp from 'chai-http'
import app from '../src/app.js'
import 'dotenv/config';
import Article from '../src/models/article.js';
import { userData, validUser } from './dummyData.js';
import { generateToken } from "../src/helpers/jwtFunctions.js"


chai.use(chaiHttp)
describe("ARTICLE END-POINT TESTING", () => {
    it("Should retrieve the articles", (done) => {
        chai.request(app).get("/api/v1/aritcles")
            .send()
            .end((err, res) => {
                expect(res).to.have.status([200])
                done()
            })
    })

    it("Should not retrieve the articles", (done) => {
        chai.request(app).get("/api/v1/aritcle/")
            .send()
            .end((err, res) => {
                expect(res).to.have.status([404])
                done()
            })
    })


    it("Should retrieve one  articles", (done) => {
        chai.request(app).get("/api/v1/aritcles/61f2d10027ad37dbb19f9436")
            .send()
            .end((err, res) => {

                done()
            })
    })
    it("Should not retrieve one articles", (done) => {
            chai.request(app).get("/api/v1/aritcle/id")
                .send()
                .end((err, res) => {

                    done()
                })
        })
        // post 

    it("It should created the articles", (done) => {
        chai.request(app).post("/api/v1/aritcles/61f2d10027ad37dbb19f9436")
            .send()
            .end((err, res) => {
                expect(res.body).to.have.property("message")
                done()
            })
    })
    it("Should not created articles", (done) => {
        chai.request(app)
            .post("/api/v1/aritcle")
            .send()
            .end((err, res) => {
                expect(res).to.have.status([404])
                done()
            })
            // end post
        it("Should not update one articles", (done) => {
            chai.request(app).patch("/api/v1/aritcle/id")
                .send()
                .end((err, res) => {
                    expect(res).to.have.status([404])
                    done()
                })
        })





    })

})