import chai, { expect, request } from 'chai'
import chaiHttp from 'chai-http'
import app from '../src/app.js'
import 'dotenv/config';
import Article from '../src/models/article.js';
import { userData, validUser } from './dummyData.js';
import { generateToken } from "../src/helpers/jwtFunctions.js"

chai.use(chaiHttp)
describe("ARTICLE END-POINT TESTING", () => {
    let id;
    it("Should created the articles", (done) => {
        chai.request(app).post("/api/v1/aritcles")
            .set("authorization", `${generateToken({ id: 1 })}`)
            .field({ title: 'postt1request', content: 'common news' })
            .attach('image', './image.png')
            .end((err, res) => {
                expect(res).to.have.status(201)
                id = res.body.data._id;
                done()
            })
    })
    it("shoud not create :: invalid token", (done) => {
        chai.request(app).post("/api/v1/aritcles")
            .set("Authorization", `b${generateToken({ id: 1 })}`)
            .set('Content-Type', 'multipart/form-data')
            .field({ title: 'postt1request', content: 'common news' })
            .attach('image', './image.png')
            .end((err, res) => {
                expect(res).to.have.status([401])
                done()
            })
    })
    it("Should retrieve the articles", (done) => {
        chai.request(app).get("/api/v1/aritcles")
            .send()
            .end((err, res) => {
                expect(res).to.have.status([200])
                done()
            })
    })

    it("Should retrieve one  articles", (done) => {
        chai.request(app).get(`/api/v1/aritcles/6202a20a536446dff9feee52`)
            .send()
            .end((err, res) => {
                expect(res).to.have.status([200])
                done()
            })
    })

    it("Should not retrieve one articles", (done) => {
            chai.request(app).get("/api/v1/aritcle/id")
                .send()
                .end((err, res) => {
                    expect(res).to.have.status([404])
                    done()
                })
        })
        // articles was deleted
    it("Should  update one articles", (done) => {
        chai.request(app).patch(`/api/v1/aritcles/62037b4c7d97ad8c309943a1`)
            .set("authorization", `${generateToken({ id: 1 })}`)
            .set('Content-Type', 'multipart/form-data')
            .field({ title: 'postt1request', content: 'common news' })
            .attach('image', './image.png')
            .end((err, res) => {
                expect(res).to.have.status([200])
                done()
            })
    })

    it("Should not  update one articles", (done) => {
        chai.request(app).patch(`/api/v1/aritcles/${id}`)
            .set("Authorization", `k${generateToken({ id: 1 })}`)
            .set('Content-Type', 'multipart/form-data')
            .field({ title: 'postt1request', content: 'common news' })
            .attach('image', './image.png')
            .end((err, res) => {
                expect(res).to.have.status([401])
                done()
            })
    })

    it("Should  delete one articles", (done) => {
        chai.request(app).delete(`/api/v1/aritcles/6202a20a536446dff9feee52`)
            .set("Authorization", `${generateToken({ id: 1 })}`)
            .end((err, res) => {
                expect(res).to.have.status([200])
                done()
            })
    })
})