import React, { useState } from 'react'

const SearchBar = ({ onSearch, onLocationSearch, loading }) => {
  const [city, setCity] = useState('')

  const handleSearch = () => {
    if (!city.trim()) {
      alert('Please enter a city name')
      return
    }
    onSearch(city.trim())
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSearch()
  }

  return (
    <div className="input-sec">
      <input
        type="text"
        placeholder="Enter your city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={loading}
      />
      <button onClick={handleSearch} disabled={loading}>
        {loading ? 'Loading...' : 'Get Weather'}
      </button>
      <button onClick={onLocationSearch} disabled={loading}>
        Use my location
      </button>
    </div>
  )
}

export default SearchBar;