const express = require('express');
const productController = require('../controllers/productController');
const router = express.Router();

router.get('', productController.getProductList);
router.get('/showRoom', productController.getShowRoom);
router.post('/search', productController.searchProduct);
router.get('/detail/:productId', productController.getProductById);

module.exports = {
  router,
};
