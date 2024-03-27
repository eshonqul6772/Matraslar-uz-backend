const router = require("express").Router();

const { getUser} = require("../../controllers/user");

router.get('/users', getUser);

module.exports = router;
