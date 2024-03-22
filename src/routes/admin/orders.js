const router = require('express').Router();

const {getOrders, getOrdertById} = require('../../controllers/orders.js');
const {protected} = require('../../middlewares/auth');



router.get('/orders', protected, getOrders);
router.get('/orders/:id', protected, getOrdertById)

module.exports = router;