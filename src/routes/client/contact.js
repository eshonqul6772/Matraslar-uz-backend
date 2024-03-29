const router = require('express').Router();

const { createContact } = require('../../controllers/conatct');

router.post('/contact', createContact);


module.exports = router;