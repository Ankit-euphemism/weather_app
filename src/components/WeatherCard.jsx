import React from "react";

const WeatherCard = ({ data }) => {
  if (!data) {
    return (
      <div className="empty-state">
        <div className="empty-emoji">🌍</div>
        <p className="empty-title">No weather data yet</p>
        <p className="empty-hint">
          Search for a city or use your location above
        </p>
      </div>
    );
  }

  const { name, sys, weather, main, wind, visibility } = data;
  const icon = weather[0]?.icon;
  const description = weather[0]?.description;

  const stats = [
    {
      emoji: "💧",
      label: "Humidity",
      value: `${main.humidity}%`,
    },
    {
      emoji: "🌡️",
      label: "Feels Like",
      value: `${Math.round(main.feels_like)}°C`,
    },
    {
      emoji: "💨",
      label: "Wind",
      value: wind ? `${Math.round(wind.speed * 3.6)} km/h` : "N/A",
    },
    {
      emoji: "👁️",
      label: "Visibility",
      value: visibility ? `${(visibility / 1000).toFixed(1)} km` : "N/A",
    },
    {
      emoji: "🔼",
      label: "Max",
      value: `${Math.round(main.temp_max)}°C`,
    },
    {
      emoji: "🔽",
      label: "Min",
      value: `${Math.round(main.temp_min)}°C`,
    },
  ];

  return (
    <div className="weather-card">
      {/* Location */}
      <div className="weather-location">
        <span className="weather-location-icon">📍</span>
        <h2 className="weather-city">{name}</h2>
        <span className="weather-country">{sys.country}</span>
      </div>
      <p className="weather-desc">{description}</p>

      {/* Temp Hero */}
      <div className="weather-hero">
        <div className="weather-temp-block">
          <div className="temp-value">
            {Math.round(main.temp)}
            <span className="temp-unit">°C</span>
          </div>
          <p className="feels-like">
            Feels like {Math.round(main.feels_like)}°C
          </p>
        </div>

        <div className="weather-icon-wrap">
          <div className="weather-icon-bg">
            <img
              src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
              alt={description}
            />
          </div>
        </div>
      </div>

      <div className="divider" />

      {/* Stats Grid */}
      <div className="stats-grid">
        {stats.map((s, i) => (
          <div className="stat-pill" key={i}>
            <span className="stat-emoji">{s.emoji}</span>
            <div className="stat-inner">
              <span className="stat-label">{s.label}</span>
              <span className="stat-value">{s.value}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherCard;
