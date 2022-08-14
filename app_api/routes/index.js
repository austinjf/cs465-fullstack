const express = require('express');
const router = express.Router();

const jwt = require("express-jwt");
const auth = jwt({
    secret: process.env.JWT_SECRET,
    userProperty: "payload",
    algorithms: ["HS256"]
});

const authController = require('../controllers/authentication');
const tripsController = require('../controllers/trips');
const roomsController = require('../controllers/rooms');
const mealsController = require('../controllers/meals');

router
    .route('/login')
    .post(authController.login);

router
    .route('/register')
    .post(authController.register);

router
    .route('/trips')
    .get(tripsController.tripsList)
    .post(auth, tripsController.tripsAddTrip);

router
    .route('/trips/:tripCode')
    .get(tripsController.tripFindCode)
    .put(auth, tripsController.tripsUpdateTrip);

router
    .route('/rooms')
    .get(roomsController.roomsList);

router
    .route('/meals')
    .get(mealsController.mealsList);

module.exports = router;