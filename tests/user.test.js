const supertest = require('supertest')
const app = require('../index')

const schema = {
    status: expect.any(Boolean),
    message: expect.any(String),
    results: expect.any(Object),
};

describe("User Services", () => {

    let token = "";

    beforeAll(async () => {
        const response = await supertest(app)
            .post("/api/user/authen")
            .send({
                email: "user1@robinhood.co.th",
                password: "1234"
            })

        token = response.body.results.data.token;
    });

    it('List', async () => {
        const response = await supertest(app)
            .get('/api/user/list')
            .set('Authorization', 'Bearer ' + token);

        expect(response.statusCode).toBe(200);
        expect(response.body.results.list).toEqual(expect.arrayContaining([expect.any(Object)]));
    });


    it('Authen', async () => {
        const response = await supertest(app)
            .post('/api/user/authen')
            .send({
                email: "user2@robinhood.co.th",
                password: "1234"
            });

        expect(response.statusCode).toBe(200);
        expect(response.body.results.data).toEqual(expect.any(Object));
        expect(response.body.results.data.token).not.toBeNull();
    });

    it('Create', async () => {
        const response = await supertest(app)
            .post('/api/user/create')
            .set('Authorization', 'Bearer ' + token)
            .send({
                name: "test",
                email: "test7@gmail.com",
                password: "1234"
            })

        expect(response.statusCode).toBe(200);
    });
});