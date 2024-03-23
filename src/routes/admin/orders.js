const router = require('express').Router();

const {getOrders, getOrdertById, updateOrder} = require('../../controllers/orders.js');
const {protected} = require('../../middlewares/auth');



router.get('/orders', protected, getOrders);
router.get('/orders/:id', protected, getOrdertById);
router.put('/orders/:id', protected, updateOrder)

module.exports = router;