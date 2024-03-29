const router = require('express').Router();

const { getProduct } = require('../../controllers/products');

router.get('/products', getProduct);


module.exports = router;