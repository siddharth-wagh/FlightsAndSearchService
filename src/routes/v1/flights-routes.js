const express = require('express');

const router = express.Router();

const flightsController = require('../../controllers/flight-controller');
const {FlightMiddlewares} = require('../../middlewares/index');
console.log(FlightMiddlewares.ValidateCreateFlight);
router.post('/',FlightMiddlewares.ValidateCreateFlight,flightsController.create);
router.get('/',flightsController.getAll);
    
module.exports = router