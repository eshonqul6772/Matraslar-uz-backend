const router = require('express').Router();

const {
  getCategory,
} = require('../../controllers/category');

router.get('/category', getCategory);


module.exports = router;

