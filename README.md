# Weather-Based Travel Planner Backend

## Project Overview

This is the backend for the **Weather-Based Travel Planner** application. The backend handles user registration and authentication, manages destination data, stores and retrieves favourite locations, and integrates with the OpenWeather API to fetch real-time weather data for destinations. 

The project allows users to:
- Register and log in to the app.
- Save their favourite destinations.
- View a list of saved destinations.
- Fetch weather data for a selected city.
- Add new travel destinations with details like the best travel time and description.

## Features

- **User Registration & Login**: Secure user authentication via email and password.
- **Destinations**: Manage and store travel destinations with country, description, and best travel time.
- **Favourite Locations**: Allows users to save, retrieve, and delete favourite cities for weather-based travel planning.
- **Weather Data Integration**: Fetch real-time weather data from the OpenWeather API for each destination.
- **Database**: MongoDB used to store user data, destinations, and favourite locations.

## Tech Stack

- **Node.js**: JavaScript runtime for server-side development.
- **Express.js**: Web framework for building RESTful APIs.
- **MongoDB**: NoSQL database for storing user data and travel destinations.
- **Mongoose**: ODM (Object Document Mapping) library to interact with MongoDB.
- **JWT (JSON Web Tokens)**: Secure token-based authentication.
- **Bcrypt**: Used for hashing user passwords.
- **OpenWeather API**: For fetching current weather conditions and forecasts.
- **Cors**: Middleware for enabling cross-origin requests.

## Setup Instructions

### Prerequisites
- Node.js (version 14.x or higher)
- MongoDB (local or MongoDB Atlas)
- OpenWeather API Key (sign up [here](https://openweathermap.org/api))

### Installation

1. Clone the repository:

```
git clone https://github.com/DopeGrammerZA/Weather-Based-Travel-Planner-Backend.git

```


2. Navigate to the project directory:

 ```
 cd weather-travel-planner-backend
 ```

3. Install dependencies:

 ```
 npm install
 ```

4. Set up environment variables by creating a .env file in the root directory:

 ```
 MONGODB_URI=mongodb://localhost:27017/weather-travel-planner
 JWT_SECRET=your-jwt-secret
 OPENWEATHER_API_KEY=your-openweather-api-key
 ```

 - MONGODB_URI: MongoDB connection string.
 - JWT_SECRET: Secret key for JWT authentication.
 - OPENWEATHER_API_KEY: Your OpenWeather API key.

5. Start the server:

 ```
 npm start
 ```

 The server will be running at http://localhost:5000

 NB: This is the hosting link: https://weather-based-travel-planner-backend.onrender.com/

## API Endpoints

### User Authentication

#### `POST /api/users/register`
- Description: Register a new user.
- Request Body:

 ```
 {
     "name": "John Doe",
     "email": "johndoe@example.com",
     "password": "password123"
 }
 ```

- Response:
 - `201 Created`:

 ```
 {
     "message": "User registered successfully!"
 }
 ```

 - `400 Bad Request` if input is invalid.

#### `POST /api/users/login`
- Description: Login a user
- Request Body:

 ```
 {
     "email": "johndoe@example.com",
     "password": "password123"
 }
 ```

### Destinations

#### `POST /api/destination`
- Description: Create a new destination.
- Request Body:

 ```
 {
     "name": "johannesburg",
     "country": "South Africa",
     "description": "The city of lights",
     "bestTravelTime": "Spring"
 }
 ```

- Response:
 - `201 Created`:

 ```
 {
     "message": "Destination created successfully",
     "destination": { ... }
 }
 ```

 - `400 Bad Request` if any fields are missing.

#### `GET /api/destination`
- Description: Get all destinations.
- Response:

 ```
 {
     "destinations": [ ... ]
 }
 ```

### Favourite Locations

#### `POST /api/favourites/save`
- Description: Save a new favourite location.
- Request Body:

 ```
 {
     "cityName": "New York",
     "email": "johndoe@example.com"
 }
 ```

- Response:
 - `201 Created`:

 ```
 {
     "message": "Location saved successfully"
 }
 ```

 - `400 Bad Request` if location already exists.

#### `GET /api/favourites/:email`
- Description: Get all favourite locations for a user.
- Response:

 ```
 {
     "favourites": [ "New York", "Paris", "London" ]
 }
 ```

#### `DELETE /api/favourites/delete`
- Description: Delete a favourite location.
- Request Body:

 ```
 {
     "cityName": "New York",
     "email": "johndoe@example.com"
 }
 ```

- Response:
 - `200 OK`:

 ```
 {
     "message": "Location deleted successfully"
 }
 ```

 - `404 Not Found` if location does not exist.

### Weather Data

#### `GET /api/weather/weather/:city`
- Description: Get current weather for a city.
- Response:

 ```
 {
     "city": "Paris",
     "temperature": 18.5,
     "humidity": 67,
     "wind_speed": 5.5,
     "description": "Clear Sky"
 }
 ```

## APIs Used

- **OpenWeather API**: Provides real-time weather data and forecasts.
- **MongoDB**: Used for storing user data, destinations, and favourite locations.
