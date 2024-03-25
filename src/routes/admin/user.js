const router = require("express").Router();

const { createUser ,getUser} = require("../../controllers/user");

router.get('/users', getUser);
router.post('/users', createUser);


module.exports = router;



