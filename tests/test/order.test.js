const jwt = require('jsonwebtoken');
const request = require('supertest');
const userFixture = require('../fixtures/user.fixtures');
const { createApp } = require('../../app');
const dataSource = require('../../src/models/appDataSource');
const userdata = require('../fixtures/user.data');
jest.mock('jsonwebtoken');

describe('/order', () => {
  let app;
  const decodedToken = { id: '1' };
  jwt.verify = jest.fn().mockImplementation(() => decodedToken);
  const requestBody = {
    productId: 1,
    quantity: 2,
  };

  beforeAll(async () => {
    app = createApp();
    await dataSource.initialize();
    await userFixture.createUser([userdata.gsUser]);
    await userFixture.createCart();
    jwt.verify.mockImplementation(() => ({ id: 1 }));
  });

  // test('should create a cart item', async () => {
  //   const response = await request(app)
  //     .post('/cart')
  //     .set('Authorization', 'token')
  //     .send(requestBody);

  //   expect(response.body).toEqual({ message: 'cart created' });
  //   expect(response.statusCode).toBe(200);
  // });

  test('createOrder', async () => {
    const response = await request(app)
      .get('/order')
      .set('Authorization', 'token');

    console.log(response.body);
    expect(response.body.totalAmount).toEqual(75000);
    expect(response.body.userInfo).toEqual('테헤란로427');
    expect(response.body.imageUrl).toEqual([
      'https://images.unsplash.com/photo-1595500403311-02b6a50c9109?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      'https://images.unsplash.com/photo-1595500403311-02b6a50c9109?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    ]);
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
