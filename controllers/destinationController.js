const Destination = require("../models/destination");

exports.createDestination = async (req, res) => {
  try {
    const { name, country, description, bestTravelTime } = req.body;

    if (!name || !country || !description || !bestTravelTime) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newDestination = new Destination({
      name,
      country,
      description,
      bestTravelTime,
    });

    await newDestination.save();

    return res.status(201).json({ message: "Destination created successfully", destination: newDestination });
  } catch (error) {
    console.error("Error creating destination:", error);
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.getDestinations = async (req, res) => {
  try {
    const destinations = await Destination.find();
    return res.status(200).json({ destinations });
  } catch (error) {
    console.error("Error fetching destinations:", error);
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.getDestinationByName = async (req, res) => {
  try {
    const { name } = req.params;
    const destination = await Destination.findOne({ name });

    if (!destination) {
      return res.status(404).json({ message: "Destination not found" });
    }

    return res.status(200).json({ destination });
  } catch (error) {
    console.error("Error fetching destination:", error);
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};
