const router = require('express').Router();

const {
  createCategory,
  getCategory,
  removeCategory,
  getCategoryById,
  updateCategory,
} = require('../../controllers/category');
const { checkAuth } = require('../../middlewares/auth');
const { validateCategory } = require('../../middlewares/validate');

router.get('/category', checkAuth, validateCategory, getCategory);
router.get('/category/:id', checkAuth, validateCategory, getCategoryById);
router.put('/category/:id', checkAuth, validateCategory, updateCategory);
router.post('/category', checkAuth, validateCategory, createCategory);
router.delete('/category/:id', checkAuth, validateCategory, removeCategory);


module.exports = router;

