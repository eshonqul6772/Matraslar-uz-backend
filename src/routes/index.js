const router = require('express').Router();

const adminRoutes = require('./admin');
const clientRoutes = require('./client');

router.use("/api/v1/admin", adminRoutes);
router.use("/api/v1/client", clientRoutes);

router.get("/", (req, res) => {
	res.write("Ok")
	res.end();
});

module.exports = router;



