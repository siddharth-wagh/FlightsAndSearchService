const express = require('express');

const router = express.Router();

const flightsController = require('../../controllers/flight-controller');
const {FlightMiddlewares} = require('../../middlewares/index');

router.post('/',FlightMiddlewares.ValidateCreateFlight,flightsController.create);
router.get('/',flightsController.getAll);
router.get('/:id',flightsController.get);
router.patch('/:id',flightsController.update);
module.exports = router