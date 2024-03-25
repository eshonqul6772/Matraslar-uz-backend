const router = require('express').Router();

const {
  createProduct,
  getProduct,
  removeProduct,
  getProductById,
  updateProduct,
} = require('../../controllers/products');
const { protected } = require('../../middlewares/auth');
const { getCategoryById } = require('../../controllers/category');

router.get('/products', protected, getProduct);
router.get('/products/:id', protected, getCategoryById);
router.put('/products/:id', protected, updateProduct);
router.post('/products', protected, createProduct);
router.delete('/products/:id', protected, removeProduct);


module.exports = router;

