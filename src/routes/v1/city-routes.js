const express = require('express');

const cityController = require('../../controllers/city-controller');

const router = express.Router();


router.post('/',cityController.create);
router.post('/mul',cityController.createMul);
router.delete('/:id',cityController.destroy);
router.get('/:id',cityController.get);
router.get('/', cityController.getAll);
router.patch('/:id',cityController.update);
router.get('/:id/airport',cityController.getAllAirports);

module.exports = router;