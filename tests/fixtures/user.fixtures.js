const dataSource = require('../../src/models/appDataSource');
const bcrypt = require('bcrypt');

const createUser = async (userList) => {
  let data = [];
  const saltRounds = 12;

  for (const user of userList) {
    const password = await bcrypt.hash(user.password, saltRounds);
    data.push([
      user.name,
      user.email,
      password,
      user.phone,
      user.address,
      user.birth,
    ]);
  }

  return dataSource.query(
    `INSERT INTO users(
    names,
    email,
    passwords,
    phone_number,
    addresses,
    birth
 ) VALUES ?;
`,
    [data]
  );
};
const createCart = async (userId) => {
  return dataSource.query(
    `INSERT INTO cart(
      user_id,
      product_items,
      quantity
 ) VALUES (?,2,1);
`,
    [userId]
  );
};
const getOrderNumber = async () => {
  return dataSource.query(`SELECT order_number As orderNumber FROM ORDERS`);
};

module.exports = { createUser, createCart, getOrderNumber };
