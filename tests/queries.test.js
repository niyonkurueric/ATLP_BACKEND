import chai, { expect } from 'chai'
import chaiHttp from 'chai-http'
import app from '../src/app.js'
import 'dotenv/config';
import { userData, validUser } from './dummyData.js';
import User from "../src/models/user.js"

import { generateToken } from "../src/helpers/jwtFunctions.js"

describe("QUERY END-POINT TESTING", () => {
    let id;
    it("Should created the queries", (done) => {
        chai.request(app).post("/api/v1/queries")
            .field({ name: 'postt1request', content: 'common news', email: 'niyo@gmail.com' })
            .end((err, res) => {
                expect(res).to.have.status([200])
                id = res.body.message._id;
                done()
            })
    })
    it("shoud not create Quries", (done) => {
        chai.request(app).post("/api/v1/bqueries")
            .field({ name: 'postt1request', content: 'common news', Emaill: 'common news' })
            .end((err, res) => {
                expect(res).to.have.status([404])
                done()
            })
    })

    // get all queries
    it("Should get all queries", (done) => {
        chai.request(app).get("/api/v1/queries")
            .set("Authorization", `${generateToken({ id: 1 })}`)
            .end((err, res) => {
                expect(res).to.have.status([200])
                done()
            })
    })
    it("Should not get all queries", (done) => {
            chai.request(app).get("/api/v1/queries")
                .set("Authorization", `kk${generateToken({ id: 1 })}`)
                .end((err, res) => {
                    expect(res).to.have.status([401])
                    done()
                })
        })
        // end get all 
    it("Should retrieve one  queries", (done) => {
        chai.request(app).get(`/api/v1/queries/${id}`)
            .set("Authorization", `${generateToken({ id: 1 })}`)
            .send()
            .end((err, res) => {
                expect(res).to.have.status([200])
                done()
            })
    })

    it("Should not retrieve one  queries", (done) => {
        chai.request(app).get(`/api/v1/queries/${id}`)
            .set("Authorization", `bb${generateToken({ id: 1 })}`)
            .send()
            .end((err, res) => {
                expect(res).to.have.status([401])
                done()
            })
    })
})