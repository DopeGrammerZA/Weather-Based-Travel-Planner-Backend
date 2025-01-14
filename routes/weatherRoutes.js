const express = require("express");
const router = express.Router();
const weatherController = require("../controllers/weatherController");

router.get("/weather/:city", weatherController.getWeather);

module.exports = router;
