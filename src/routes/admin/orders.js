const router = require('express').Router();

const {getOrders, getOrderById, updateOrder} = require('../../controllers/orders.js');
const { checkAuth } = require('../../middlewares/auth');
const { validateOrders } = require('../../middlewares/validate')

router.get('/orders', checkAuth,validateOrders, getOrders);
router.get('/orders/:id', checkAuth, validateOrders, getOrderById);
router.put('/orders/:id', checkAuth, validateOrders, updateOrder)

module.exports = router;