const orderDao = require('../models/orderDao');
const appDataSource = require('../models/appDataSource');
const {orderStatusEnum} = require('../middlewares/enums')

const createOrderAndItems = async (userId) => {
  const queryRunner = appDataSource.createQueryRunner();
  await queryRunner.connect();

  await queryRunner.startTransaction();

  let orderId;
  let totalAmount;
  let imageUrl;
  let userInfo;

  try {
    const orders = await orderDao.findMatched(userId);

    if (orders.length === 0 || orders[0].order_status_id === orderStatusEnum.COMPLETE_PAYMENT) {
      await orderDao.createOrders(userId, orderStatusEnum.PENDING_PAYMENT);
      const newOrders = await orderDao.findMatched(userId);
      orderId = newOrders[0].id;

      totalAmount = await orderDao.createOrderAndItems(userId, orderId);
    } else if(orders[0].order_status_id === orderStatusEnum.PENDING_PAYMENT) {
      orderId = orders[0].id;
      totalAmount = await orderDao.createOrderAndItems(userId, orderId);
    }

    imageUrl = await orderDao.getImageUrlByProductId(orderId);
    userInfo = await orderDao.getUserInfoByUserId(userId);

    await queryRunner.commitTransaction();

    return {
      totalAmount: totalAmount,
      imageUrl: imageUrl,
      userInfo: userInfo.addresses,
      orderNumber: userInfo.orderNumber
    };
  } catch (err) {
    await queryRunner.rollbackTransaction();
    throw new Error(
      `Failed to create orders for userId ${userId}: ${err.message}`
    );
  } finally {
    await queryRunner.release();
  }
};

const executedOrder = async (userId) => {
  try {
    const currentPoints = (await orderDao.getUserInfoByUserId(userId)).map(
      (result) => result['currentPoints']
    );

    await orderDao.executedOrder(userId);

    const remainingPoints = (await orderDao.getUserInfoByUserId(userId)).map(
      (result) => result['currentPoints']
    );

    return { currentPoints, remainingPoints };
  } catch (err) {
    throw new Error(
      `Failed to create orders for userId ${userId}: ${err.message}`
    );
  }
};
const purchaseditems = async (userId) => {
  try {
    const items = await orderDao.purchaseditems(userId);
    return items;
  } catch (err) {
    console.log(err);
    throw new Error('NO_ITEM');
  }
};
module.exports = {
  executedOrder,
  createOrderAndItems,
  purchaseditems,
};
