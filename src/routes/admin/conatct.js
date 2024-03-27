const router = require('express').Router();

const {getContact } = require('../../controllers/conatct');
const { checkAuth }= require('../../middlewares/auth');
const { validateContact }= require('../../middlewares/validate');

router.get('/contact', checkAuth,validateContact, getContact);

module.exports = router;