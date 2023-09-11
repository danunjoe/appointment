const supertest = require('supertest')
const app = require('../index')

describe("Appointment Services", () => {

    let token = "";
    let appoinmnetId = "7596f251-47d3-4e18-b651-4852933382bd";

    beforeAll(async () => {
        const response = await supertest(app)
            .post("/api/user/authen")
            .send({
                email: "user2@robinhood.co.th",
                password: "1234"
            })

        token = response.body.results.data.token;
    });

    it('List', async () => {
        const response = await supertest(app).get('/api/appointment/list');
        expect(response.statusCode).toBe(200);
        expect(response.body.results.list).toEqual(expect.arrayContaining([expect.any(Object)]));
        expect(response.body.results.total).toEqual(expect.any(Number));
    });

    it('Retreive', async () => {
        const response = await supertest(app).get('/api/appointment/retreive/' + appoinmnetId);

        expect(response.statusCode).toBe(200);
        expect(response.body.results.data).toEqual(expect.any(Object))
    });

    it("Comment", async () => {
        const response = await supertest(app)
            .post("/api/appointment/comment")
            .set('Authorization', 'Bearer ' + token)
            .send({
                appointment_id: appoinmnetId,
                comment: "ทดสอบ"
            });

        expect(response.statusCode).toBe(200);
        expect(response.body.status).toEqual(true);
    });

    it("Archive", async () => {
        const response = await supertest(app)
            .post("/api/appointment/archive")
            .set('Authorization', 'Bearer ' + token)
            .send({
                appointment_id: appoinmnetId,
            });

        expect(response.statusCode).toBe(200);
        expect(response.body.status).toEqual(true);
    });

    it("Update Status", async () => {
        const response = await supertest(app)
            .post("/api/appointment/updatestatus")
            .set('Authorization', 'Bearer ' + token)
            .send({
                appointment_id: appoinmnetId,
                status_id: "3"
            });

        expect(response.statusCode).toBe(200);
        expect(response.body.status).toEqual(true);
    });

    
    // afterEach(async() => { 
    //     await app.close();
    // });
});