import React, { useState } from 'react'
import SearchBar from './components/SearchBar'
import WeatherCard from './components/WeatherCard'
import { fetchWeatherByCity, fetchWeatherByCoords } from './api/weatherApi'

const App = () => {
  const [weatherData, setWeatherData] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  const handleWeatherResponse = (data) => {
    setWeatherData(data)
    setError('')
  }

  const handleError = (err) => {
    const message =
      err.response?.data?.message || 'Error fetching weather data.'
    setError(message)
    setWeatherData(null)
  }

  const handleSearch = async (city) => {
    setLoading(true)
    try {
      const res = await fetchWeatherByCity(city)
      handleWeatherResponse(res.data)
    } catch (err) {
      handleError(err)
    } finally {
      setLoading(false)
    }
  }

  const handleLocationSearch = () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser.')
      return
    }
    setLoading(true)
    navigator.geolocation.getCurrentPosition(
      async ({ coords: { latitude, longitude } }) => {
        try {
          const res = await fetchWeatherByCoords(latitude, longitude)
          handleWeatherResponse(res.data)
        } catch (err) {
          handleError(err)
        } finally {
          setLoading(false)
        }
      },
      () => {
        alert('Unable to fetch location.')
        setLoading(false)
      }
    )
  }

  return (
    <div className={`app-shell ${darkMode ? 'dark' : ''}`}>
      <div className="container">
        <div className="toggle-theme">
          <button id="themeToggle" onClick={() => setDarkMode((prev) => !prev)}>
            {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>

        <h1>Weather App</h1>

        <SearchBar
          onSearch={handleSearch}
          onLocationSearch={handleLocationSearch}
          loading={loading}
        />

        {error && (
          <div className="weather-info error">
            <p>⚠️ {error}</p>
          </div>
        )}

        <WeatherCard data={weatherData} />
      </div>
    </div>
  )
}

export default App;
