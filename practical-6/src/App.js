import React, { useState } from "react";
import axios from "axios";
import "./mycss.css";

const App = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const API_KEY = "0670d2d4db97155e26f1d6020ae95dfb"; // Replace with your OpenWeatherMap API key

  const fetchWeather = async () => {
    if (!city) {
      setError("Please enter a city name");
      setWeather(null);
      return;
    }
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      setWeather(response.data);
      setError(null);
    } catch (err) {
      setError("City not found. Please try again.");
      setWeather(null);
    }
  };

  return (
    <div className="app">
      <h1>Weather App</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={fetchWeather}>Get Weather</button>
      </div>
      {error && <p className="error">{error}</p>}
      {weather && (
        <div className="weather-info">
          <h2>
            {weather.name}, {weather.sys.country}
          </h2>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Weather: {weather.weather[0].description}</p>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt={weather.weather[0].description}
          />
        </div>
      )}
    </div>
  );
};

export default App;
