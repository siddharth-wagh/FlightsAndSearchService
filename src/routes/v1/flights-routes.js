const express = require('express');

const router = express.Router();

const flightsController = require('../../controllers/flight-controller');

router.post('/',flightsController.create);

module.exports = router;