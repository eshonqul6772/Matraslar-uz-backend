const router = require('express').Router();

const { createContact } = require('../../controllers/conatct');
const { validateContact }= require("../../middlewares/validate");

router.post('/contact',  validateContact, createContact);


module.exports = router;