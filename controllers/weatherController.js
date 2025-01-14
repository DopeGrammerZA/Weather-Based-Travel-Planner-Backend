const fetch = require("node-fetch");

exports.getWeather = async (req, res) => {
  const { city } = req.params; 
  const apiKey = process.env.OPENWEATHER_API_KEY; 

  try {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.cod !== 200) {
      return res.status(400).json({ message: data.message });
    }

    return res.status(200).json({
      city: data.name,
      temperature: data.main.temp,
      humidity: data.main.humidity,
      wind_speed: data.wind.speed,
      description: data.weather[0].description,
    });
  } catch (error) {
    console.error("Weather fetch error:", error);
    return res.status(500).json({ message: "Server error" });
  }
};
