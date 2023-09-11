const supertest = require('supertest')
const app = require('../index')

describe("Status Services", () => {

    it('List', async () => {
        const response = await supertest(app).get('/api/status/list');
        expect(response.statusCode).toBe(200);
        expect(response.body.results.list).toEqual(expect.arrayContaining([expect.any(Object)]));
    });

});