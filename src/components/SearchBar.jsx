import React, { useState } from "react";

const SearchBar = ({ onSearch, onLocationSearch, loading }) => {
  const [city, setCity] = useState("");
  const [shake, setShake] = useState(false);

  const handleSearch = () => {
    if (!city.trim()) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return;
    }
    onSearch(city.trim());
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div style={{ marginBottom: "8px" }}>
      <div className="search-wrapper">
        <div className={`search-input-wrap ${shake ? "shake" : ""}`}>
          <span className="search-icon">🔍</span>
          <input
            className="search-input"
            type="text"
            placeholder="City name, e.g. Mumbai…"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={loading}
            id="cityInput"
            aria-label="Enter city name"
          />
        </div>
        <button
          className="btn-search"
          onClick={handleSearch}
          disabled={loading}
          id="searchBtn"
        >
          Search
        </button>
      </div>

      <button
        className="btn-location"
        onClick={onLocationSearch}
        disabled={loading}
        id="locationBtn"
      >
        📍 Use my current location
      </button>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-6px); }
          40% { transform: translateX(6px); }
          60% { transform: translateX(-4px); }
          80% { transform: translateX(4px); }
        }
        .shake { animation: shake 0.4s ease; }
      `}</style>
    </div>
  );
};

export default SearchBar;
