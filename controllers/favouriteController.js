const FavouriteLocation = require('../models/FavouriteLocation');

const saveFavourite = async (req, res) => {
  try {
    const { cityName, email } = req.body;
    const existingLocation = await FavouriteLocation.findOne({ cityName, email });

    if (existingLocation) {
      return res.status(400).json({ message: 'Location already saved' });
    }

    const newFavourite = new FavouriteLocation({ cityName, email });
    await newFavourite.save();

    res.status(201).json({ message: 'Location saved successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

const getFavourites = async (req, res) => {
  try {
    const { email } = req.params;
    const favourites = await FavouriteLocation.find({ email });
    res.json({ favourites: favourites.map(fav => fav.cityName) });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching favourites', error });
  }
};

const deleteFavourite = async (req, res) => {
  try {
    const { cityName, email } = req.body;
    const deletedLocation = await FavouriteLocation.findOneAndDelete({ cityName, email });

    if (!deletedLocation) {
      return res.status(404).json({ message: 'Location not found' });
    }

    res.json({ message: 'Location deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting location', error });
  }
};

module.exports = {
  saveFavourite,
  getFavourites,
  deleteFavourite
};
