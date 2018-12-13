const expect = require('expect');
const request = require('supertest');
const app = require('../app');
const { clients, policies } = require('../tests/seed');

describe('POST /login', () => {
  it('should login user and return authorization token', (done) => {
    const email = clients[0].email;
    request(app)
      .post('/users/login')
      .send({ email })
      .expect(200)
      .expect(res => {
        expect(res.headers['authorization']).toBeTruthy();
      })
      .end(done);
  });

  it('should return 403 with invalid login', (done) => {
    const email = 'test@example.com';
    request(app)
      .post('/users/login')
      .send({ email })
      .expect(401)
      .expect(res => {
        expect(res.headers['authorization']).toBeFalsy();
      })
      .end(done);
  });
});

describe('GET /api/users/:id', () => {
  it('should return user by id', (done) => {
    const { id, token } = clients[0];
    request(app)
      .get(`/api/users/${id}`)
      .set('Authorization', token)
      .expect(200)
      .expect(res => {
        expect(res.body.client.id).toBe(id);
      })
      .end(done);
  });

  it('should return 404 if invalid id', (done) => {
    const { token } = clients[0];
    request(app)
      .get(`/api/users/123abc`)
      .set('Authorization', token)
      .expect(404)
      .end(done);
  });

  it('should return 401 if no auth token set', (done) => {
    const { id } = clients[0];
    request(app)
      .get(`/api/users/${id}`)
      .expect(401)
      .end(done);
  });
});


describe('GET /api/users', () => {
  it('should return user by name query param', (done) => {
    const { id, name, token } = clients[0];
    request(app)
      .get(`/api/users/?name=${name}`)
      .set('Authorization', token)
      .expect(200)
      .expect(res => {
        expect(res.body.client.id).toBe(id);
      })
      .end(done);
  });
});

describe('GET /api/users/:name/policies', () => {
  it('should return user policies', (done) => {
    const { name, token } = clients[1];
    const policy = policies[0];
    request(app)
      .get(`/api/users/${name}/policies`)
      .set('Authorization', token)
      .expect(200)
      .expect(res => {
        expect(res.body.policies[0].id).toBe(policy.id);
      })
      .end(done);
  });

  it('should return 403 if role not admin', (done) => {
    const { name, token } = clients[0];
    request(app)
      .get(`/api/users/${name}/policies`)
      .set('Authorization', token)
      .expect(403)
      .end(done);
  });

});

describe('GET /api/users/policies/:id', () => {
  it('should return user policies', (done) => {
    const { id, token } = clients[1];
    const policy = policies[0];
    request(app)
      .get(`/api/users/policies/${policy.id}`)
      .set('Authorization', token)
      .expect(200)
      .expect(res => {
        expect(res.body.client.id).toBe(id);
      })
      .end(done);
  });

  it('should return 403 if role not admin', (done) => {
    const { id, token } = clients[0];
    request(app)
      .get(`/api/users/policies/${id}`)
      .set('Authorization', token)
      .expect(403)
      .end(done);
  });
});