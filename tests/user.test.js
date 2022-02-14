import { expect, request, use } from 'chai';
import chaiHttp from 'chai-http'
import app from '../src/app.js'
import 'dotenv/config';


import { generateToken } from "../src/helpers/jwtFunctions.js"
import { createEmail } from './emailgenerator.js';

use(chaiHttp)

describe("USER END POINT-TEST", () => {
    const email = createEmail(6) + "@domain.com";

    it("should accept user to login", (done) => {
        request(app)
            .post("/api/v1/user/login")
            .send({
                email: "ericniyonkurue@gmail.com",
                password: "password@12",
            })
            .end((err, res) => {
                expect(res.statusCode).to.equal(200);
                done();
            });
    });

    it("should not accept user to login", (done) => {
        request(app)
            .post("/api/v1/user/slogin")
            .send({
                email: "ericniyonkurue@gmail.com",
                password: "password@12",
            })
            .end((err, res) => {
                expect(res.statusCode).to.equal(404);
                done();
            });
    });


    it("It should register the user", (done) => {
        request(app)
            .post("/api/v1/user/register")
            .set('Content-Type', 'multipart/form-data')
            .field({ username: 'postt1', email: email, password: 'Password12@' })
            .end((err, res) => {
                expect(res).to.have.status([201])
                done()
            })
    })

    it("It should not register the user", (done) => {
        request(app)
            .post("/api/v1/user/registers")
            .set('Content-Type', 'multipart/form-data')
            .field({ username: 'postt1', email: email, password: 'Password12@' })
            .end((err, res) => {
                expect(res).to.have.status([404])
                done()
            })
    })

});