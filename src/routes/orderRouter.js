const express = require('express');
const orderController = require('../controllers/orderController');
const router = express.Router();
const { loginRequired } = require('../middlewares/auth');

router.post('', loginRequired, orderController.createOrders);
router.get('/purchaseditems', loginRequired, orderController.purchaseditems);
module.exports = { router };
