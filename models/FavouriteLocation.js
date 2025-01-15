const mongoose = require('mongoose');

const FavouriteLocationSchema = new mongoose.Schema({
  cityName: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true
  },
  savedAt: {
    type: Date,
    default: Date.now
  }
});

const FavouriteLocation = mongoose.model('FavouriteLocation', FavouriteLocationSchema);

module.exports = FavouriteLocation;
