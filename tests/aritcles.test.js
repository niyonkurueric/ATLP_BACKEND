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
            .set("Authorization", `${generateToken({ id: 1 })}`)
            .set('Content-Type', 'multipart/form-data')
            .field({ title: 'postt1request', content: 'common news' })
            .attach('image', './image.png')
            .end((err, res) => {
                expect(res).to.have.status([201])
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
        chai.request(app).get(`/api/v1/aritcles/${id}`)
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
        // post 


    it("Should not created articles", (done) => {
        chai.request(app)
            .post("/api/v1/aritcle")
            .send()
            .end((err, res) => {
                expect(res).to.have.status([404])
                done()
            })
    })

    it("Should  update one articles", (done) => {
        chai.request(app).patch(`/api/v1/aritcles/${id}`)
            .set("Authorization", `${generateToken({ id: 1 })}`)
            .set('Content-Type', 'multipart/form-data')
            .field({ title: 'postt1request', content: 'common news' })
            .attach('image', './image.png')
            .end((err, res) => {
                expect(res).to.have.status([200])
                done()
            })
    })

})



// it("should add article while logged in", (done) => {

//     chai
//         .request(app)
//         .post("/api/v1/articles")
//         .set("Authorization", `Bearer ${token}`)
//         .set('Content-Type', 'multipart/form-data')
//         .field({ title: 'postt1', content: 'hello', author: 'dave' })
//         .attach('image', './gantt.jpg')
//         .end((req, res) => {
//             articleId = res.body.data._id;
//             expect(res).to.have.status([200]);