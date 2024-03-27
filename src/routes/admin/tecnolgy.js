const router = require('express').Router();

const {createTechnology,getTechnology,getTechnologyById, updateTechnology,removeTechnology  } = require('../../controllers/tecnolgy.js');
const { checkAuth } = require('../../middlewares/auth');


router.get('/technology', checkAuth, getTechnology);
router.get('/technology/:id', checkAuth, getTechnologyById);
router.post('/technology', checkAuth, createTechnology);
router.put('/technology/:id', checkAuth, updateTechnology);
router.delete('/technology/:id', checkAuth, removeTechnology);


module.exports = router;