const router = require('express').Router();

const { getBanner } = require('../../controllers/banner');

router.get('/banner', getBanner);


module.exports = router;