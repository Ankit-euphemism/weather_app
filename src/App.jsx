import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import { fetchWeatherByCity, fetchWeatherByCoords } from "./api/weatherApi";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleWeatherResponse = (data) => {
    setWeatherData(data);
    setError("");
  };

  const handleError = (err) => {
    const message =
      err.response?.data?.message ||
      "Could not find weather for that location.";
    setError(message);
    setWeatherData(null);
  };

  const handleSearch = async (city) => {
    setLoading(true);
    try {
      const res = await fetchWeatherByCity(city);
      handleWeatherResponse(res.data);
    } catch (err) {
      handleError(err);
    } finally {
      setLoading(false);
    }
  };

  const handleLocationSearch = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }
    setLoading(true);
    navigator.geolocation.getCurrentPosition(
      async ({ coords: { latitude, longitude } }) => {
        try {
          const res = await fetchWeatherByCoords(latitude, longitude);
          handleWeatherResponse(res.data);
        } catch (err) {
          handleError(err);
        } finally {
          setLoading(false);
        }
      },
      () => {
        setError("Unable to access your location. Please check permissions.");
        setLoading(false);
      },
    );
  };

  return (
    <div className={`app-shell ${darkMode ? "dark" : ""}`}>
      <div className="container">
        {/* Top Bar */}
        <div className="top-bar">
          <div className="app-brand">
            <span className="brand-icon">🌤️</span>
            <span className="brand-name">Gale Gallery</span>
          </div>
          <button
            id="themeToggle"
            className="theme-toggle-btn"
            onClick={() => setDarkMode((prev) => !prev)}
            title="Toggle theme"
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>

        {/* Hero */}
        <h1 className="hero-title">Live Weather</h1>
        <p className="hero-subtitle">Search any city or use your location</p>

        {/* Search */}
        <SearchBar
          onSearch={handleSearch}
          onLocationSearch={handleLocationSearch}
          loading={loading}
        />

        {/* Error */}
        {error && (
          <div className="error-banner">
            <span className="error-icon">⚠️</span>
            <p className="error-text">{error}</p>
          </div>
        )}

        {/* Loading */}
        {loading && (
          <div className="loading-wrapper">
            <div className="spinner" />
            <p className="loading-text">Fetching weather data…</p>
          </div>
        )}

        {/* Weather Card */}
        {!loading && <WeatherCard data={weatherData} />}

        {/* Footer */}
        <div className="app-footer">Powered by OpenWeatherMap</div>
      </div>
    </div>
  );
};

export default App;
