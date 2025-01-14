const express = require("express");
const destinationController = require("../controllers/destinationController");

const destinationRoutes = express.Router();

destinationRoutes.post("/", destinationController.createDestination);
destinationRoutes.get("/", destinationController.getDestinations);
destinationRoutes.get("/:name", destinationController.getDestinationByName);

module.exports = destinationRoutes;
