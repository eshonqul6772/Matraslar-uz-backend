const router = require('express').Router();
const multer = require('multer');

const {
  createProduct,
  getProduct,
  removeProduct,
  getProductById,
  updateProduct,
} = require('../../controllers/products');
const { checkAuth } = require('../../middlewares/auth');
const { validateProducts } = require('../../middlewares/validate');
const upload = require('../../utils/fileUploader');

router.post('/products/:id', checkAuth, upload.single('images'), createProduct);
router.get('/products', checkAuth, validateProducts, getProduct);
router.get('/products/:id', checkAuth, validateProducts, getProductById);
router.put('/products/:id', checkAuth, validateProducts, updateProduct);
router.delete('/products/:id', checkAuth, validateProducts, removeProduct);


module.exports = router;


