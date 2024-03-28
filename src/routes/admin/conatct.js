const router = require('express').Router();

const {getContact, removeContact } = require('../../controllers/conatct');
const { checkAuth }= require('../../middlewares/auth');
const { validateContact }= require('../../middlewares/validate');

router.get('/contact', checkAuth,validateContact, getContact);
router.delete('/contact/:id', checkAuth, validateContact, removeContact);

module.exports = router;