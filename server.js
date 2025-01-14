const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const router = require('./routes/userRoutes');
const weatherRoutes = require("./routes/weatherRoutes");
const destinationRoutes = require("./routes/destinationRoutes");

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

connectDB();

app.use('/api/users', router);
app.use("/api/weather", weatherRoutes);
app.use("/api/destination", destinationRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
