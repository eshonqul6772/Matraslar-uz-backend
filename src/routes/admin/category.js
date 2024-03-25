const router = require('express').Router();

const {
  createCategory,
  getCategory,
  removeCategory,
  getCategoryById,
  updateCategory,
} = require('../../controllers/category');
const { protected } = require('../../middlewares/auth');

router.get('/category', protected, getCategory);
router.get('/category/:id', protected, getCategoryById);
router.put('/category/:id', protected, updateCategory);
router.post('/category', protected, createCategory);
router.delete('/category/:id', protected, removeCategory);


module.exports = router;

