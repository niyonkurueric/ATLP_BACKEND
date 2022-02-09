import chai, { expect } from 'chai'
import chaiHttp from 'chai-http'
import app from '../src/app.js'
import 'dotenv/config';
chai.use(chaiHttp)
describe("COMMENT END-POINT TESTING", () => {
    // comments 
    it("Should created the comments", (done) => {
        chai.request(app).post(`/api/v1/comments/6202a20a536446dff9feee52`)
            .field({ articleId: '6202a20a536446dff9feee52', name: 'postt1request', comment: 'common news' })
            .end((err, res) => {
                expect(res).to.have.status([200])
                done()
            })
    })
    it("shoud not create comments", (done) => {
        chai.request(app).post(`api/v1/comment`)
            .field({ id: '6202a20a536446dff9feee52', name: 'postt1request', comment: 'common news' })
            .end((err, res) => {
                expect(res).to.have.status([404])
                done()
            })
    })


    it("Should retrieve one comment", (done) => {
        chai.request(app).get("/api/v1/comments/6202a20a536446dff9feee52")
            .send()
            .end((err, res) => {
                expect(res).to.have.status([200])
                done()
            })
    })
    it("Should not retrieve one comment", (done) => {
        chai.request(app).get("/api/v1/comments")
            .send()
            .end((err, res) => {
                expect(res).to.have.status([404])
                done()
            })
    })

})