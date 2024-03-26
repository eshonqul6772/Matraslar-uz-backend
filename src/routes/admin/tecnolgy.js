const router = require('express').Router();

const {createTecnolgy,getTecnolgy,getTecnolgyById, updateTecnolgy,removeTecnolgy  } = require('../../controllers/tecnolgy.js');
const { protected } = require('../../middlewares/auth');


router.get('/technology', protected, getTecnolgy);
router.get('/technology/:id', protected, getTecnolgyById);
router.post('/technology', protected, createTecnolgy);
router.put('/technology/:id', protected, updateTecnolgy);
router.delete('/technology/:id', protected, removeTecnolgy);


module.exports = router;