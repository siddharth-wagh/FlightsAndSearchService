const express = require('express');
const cityRoutes = require('./city-routes');
const airportRoutes = require('./airport-routes');
const flightRoutes = require('./flights-routes');

const router = express.Router();

// Prefixing routes for clarity
router.use('/city', cityRoutes);
router.use('/airport', airportRoutes);
router.use('/flights',flightRoutes);
module.exports = router;