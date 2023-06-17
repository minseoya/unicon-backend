const jwt = require('jsonwebtoken');
const request = require('supertest');
const userService = require('../../src/services/userService');
const userFixture = require('../fixtures/user.fixtures');
const { createApp } = require('../../app');
const dataSource = require('../../src/models/appDataSource');
const userdata = require('../fixtures/user.data');
jest.setTimeout(30000); // 예상 시간을 늘려보세요 (밀리초 단위)
jest.mock('../../src/middlewares/auth', () => ({
  loginRequired: jest.fn(),
}));

describe('POST /cart', () => {
  let app;
  let token;
  beforeAll(async () => {
    app = createApp();
    await dataSource.initialize();
    await userFixture.createUser([userdata.kakaoUser]);
    const res = await request(app)
      .post('/users/signin') // 로그인 페이지에 접속한다.
      .send({
        email: 'test1@kakao.com', // 이미 회원가입이 되어 있는
        password: 'testpassword!', // 유저정보를 서버로 보내준다.
      });

    // token = res.cookie;
    // token = res.cookie.data;
    console.log(res.body.accesstoken);
    token = res.body.accesstoken; // 받은 응답을 위에서 선언한 token에 담아준다
  });

  // const mockUser = { id: '1' };
  // jest.mock('../../src/services/userService.js', () => ({
  //   getUserById: jest.fn().mockResolvedValue(mockUser),
  // }));
  test('should create a cart item', async () => {
    const accessToken = 'valid_access_token';
    const requestBody = {
      productId: 1,
      quantity: 2,
    };

    const decodedToken = { id: '1' };

    jwt.verify = jest.fn().mockImplementation(() => decodedToken);

    const response = await request(app)
      .post('/cart')
      .set('Authorization', token)
      .send(requestBody);

    // expect(loginRequired).toHaveBeenCalled(); // loginRequired 미들웨어가 호출되었는지 확인
    expect(jwt.verify).toHaveBeenCalledWith(
      accessToken,
      process.env.SECRET_KEY,
      { issuer: 'min' }
    ); // jwt.verify가 올바른 인자로 호출되었는지 확인
    // expect(userService.getUserById).toHaveBeenCalledWith(decodedToken.id); // userService.getUserById가 올바른 인자로 호출되었는지 확인
    expect(response.statusCode).toBe(200); // 응답 상태 코드가 200인지 확인
    // 기타 필요한 응답 데이터 검증
  });
  afterAll(async () => {
    await dataSource.query('SET FOREIGN_KEY_CHECKS=0');
    await dataSource.query(`TRUNCATE users`);
    await dataSource.query(`ALTER TABLE users AUTO_INCREMENT = 1`);
    await dataSource.query('SET FOREIGN_KEY_CHECKS=1');

    await dataSource.destroy();
  });
});
