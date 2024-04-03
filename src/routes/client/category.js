const router = require('express').Router();

const {
  getCategoryClient
} = require('../../controllers/category');
router.get('/category', getCategoryClient);


module.exports = router;

