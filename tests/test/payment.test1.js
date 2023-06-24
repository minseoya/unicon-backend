const jwt = require('jsonwebtoken');
const request = require('supertest');
const userFixture = require('../fixtures/user.fixtures');
const { createApp } = require('../../app');
const dataSource = require('../../src/models/appDataSource');
const userdata = require('../fixtures/user.data');
jest.mock('jsonwebtoken');

describe('/payment', () => {
  let app;
  const decodedToken = { id: '1' };
  jwt.verify = jest.fn().mockImplementation(() => decodedToken);
  let orderNumber;
  beforeAll(async () => {
    app = createApp();
    await dataSource.initialize();
    await userFixture.createUser([userdata.seUser]);
    await userFixture.createCart(1);

    jwt.verify.mockImplementation(() => ({ id: 1 }));
  });

  test('createPayment', async () => {
    const response = await request(app)
      .post('/payment')
      .set('Authorization', 'token')
      .send({ orderNumber });

    console.log(response.body);

    expect(response.statusCode).toBe(201);
  });

  afterAll(async () => {
    await dataSource.query('SET FOREIGN_KEY_CHECKS=0');
    await dataSource.query(`TRUNCATE users`);
    await dataSource.query(`TRUNCATE cart`);
    await dataSource.query(`TRUNCATE orders`);
    await dataSource.query(`ALTER TABLE users AUTO_INCREMENT = 1`);
    await dataSource.query('SET FOREIGN_KEY_CHECKS=1');

    await dataSource.destroy();
  });
});
