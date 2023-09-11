const supertest = require('supertest')
const app = require('../index')

describe("Health Check Services", () => {

    it('Health Check', async () => {
        const response = await supertest(app).get('/api/health');
        expect(response.statusCode).toBe(200);
        expect(response.text).toEqual("Ok");
    });

});