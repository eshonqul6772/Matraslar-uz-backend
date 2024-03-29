const router = require('express').Router();

const { getLocation } = require('../../controllers/location');

router.post('/location', getLocation);


module.exports = router;