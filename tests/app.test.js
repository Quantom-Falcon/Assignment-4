const request = require('supertest');
const app = require('../app');

describe('GET /api/hello', () => {
  it('returns Hello World', async () => {
    const res = await request(app).get('/api/hello');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Hello World');
  });

  it('returns 404 on unknown route', async () => {
    const res = await request(app).get('/api/doesnotexist');
    expect(res.statusCode).toBe(404);
  });
});
