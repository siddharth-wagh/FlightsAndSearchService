const express = require('express');


const airportController = require('../../controllers/airport-controller');
const router = express.Router();

router.post('/',airportController.create);
router.delete('/:id',airportController.destroy);
router.get('/:id',airportController.get);
router.get('/', airportController.getAll);
router.patch('/:id',airportController.update);

module.exports = router;