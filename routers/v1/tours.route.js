const express = require("express");
const router = express.Router();

const toursControllers = require("../../controllers/tours.controller");

router
  .route("/")
  .get(toursControllers.getTours)
  .post(toursControllers.createTours);

router
  .route("/:id")
  .get(toursControllers.tourDetails)
  .patch(toursControllers.updateTour);
module.exports = router;
