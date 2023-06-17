const jwt = require('jsonwebtoken');
const request = require('supertest');
const userService = require('../../src/services/userService');
const userFixture = require('../fixtures/user.fixtures');
const { createApp } = require('../../app');
const dataSource = require('../../src/models/appDataSource');
const userdata = require('../fixtures/user.data');
jest.mock('jsonwebtoken');

describe('POST /cart', () => {
  let app;

  beforeAll(async () => {
    app = createApp();
    await dataSource.initialize();
    await userFixture.createUser([userdata.kakaoUser, userdata.naverUser]);
    jwt.verify.mockImplementation(() => ({ id: 1 }));
  });

  test('should create a cart item', async () => {
    const requestBody = {
      productId: 1,
      quantity: 2,
    };

    const decodedToken = { id: '1' };

    jwt.verify = jest.fn().mockImplementation(() => decodedToken);

    const response = await request(app)
      .post('/cart')
      .set('Authorization', 'token')
      .send(requestBody);

    expect(response.body).toEqual({ message: 'cart created' });
    expect(response.statusCode).toBe(200); // 응답 상태 코드가 200인지 확인
  });
  afterAll(async () => {
    await dataSource.query('SET FOREIGN_KEY_CHECKS=0');
    await dataSource.query(`TRUNCATE users`);
    await dataSource.query(`TRUNCATE cart`);
    await dataSource.query(`ALTER TABLE users AUTO_INCREMENT = 1`);
    await dataSource.query('SET FOREIGN_KEY_CHECKS=1');

    await dataSource.destroy();
  });
});
