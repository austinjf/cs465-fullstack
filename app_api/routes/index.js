const express = require('express');
const router = express.Router();

const tripsController = require('../controllers/trips');
const roomsController = require('../controllers/rooms');
const mealsController = require('../controllers/meals');

router
    .route('/trips')
    .get(tripsController.tripsList)
    .post(tripsController.tripsAddTrip);

router
    .route('/trips/:tripCode')
    .get(tripsController.tripFindCode)
    .put(tripsController.tripsUpdateTrip);

router
    .route('/rooms')
    .get(roomsController.roomsList);

router
    .route('/meals')
    .get(mealsController.mealsList);

module.exports = router;