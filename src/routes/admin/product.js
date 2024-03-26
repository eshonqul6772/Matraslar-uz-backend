const router = require('express').Router();
const multer = require('multer');

const {
  createProduct,
  getProduct,
  removeProduct,
  getProductById,
  updateProduct,
} = require('../../controllers/products');
const { protected } = require('../../middlewares/auth');
const asyncHandler = require('../../middlewares/async');

const upload = multer({ dest: 'uploads/' });

router.post('/products', upload.single('images'),createProduct);

router.get('/products',  protected,  getProduct);
router.get('/products/:id', protected, getProductById);
router.put('/products/:id', protected, updateProduct);
router.delete('/products/:id', protected, removeProduct);


module.exports = router;


