import { expect, request, use } from 'chai';
import chaiHttp from 'chai-http'
import app from '../src/app.js'
import 'dotenv/config';

use(chaiHttp)

describe("USER END POINT-TEST", () => {
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
});