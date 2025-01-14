const mongoose = require("mongoose");

const destinationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  country: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  bestTravelTime: {
    type: String, 
    required: true,
  },
  weatherData: {
    type: Object, 
    default: {},
  },
});

const Destination = mongoose.model("Destination", destinationSchema);

module.exports = Destination;
