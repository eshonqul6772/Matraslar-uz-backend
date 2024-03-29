const router = require('express').Router();

const { getTechnology } = require('../../controllers/technology');

router.get('/technology', getTechnology);


module.exports = router;