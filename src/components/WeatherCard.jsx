import React from 'react'

const WeatherCard = ({ data }) => {
  if (!data) return null

  return (
    <div className="weather-info">
      <h2>{data.name}, {data.sys.country}</h2>
      <img
        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        alt="Weather Icon"
      />
      <p><b>Temperature:</b> {data.main.temp} °C</p>
      <p><b>Feels like:</b> {data.main.feels_like} °C</p>
      <p><b>Weather:</b> {data.weather[0].description}</p>
      <p><b>Humidity:</b> {data.main.humidity}%</p>
    </div>
  )
}

export default WeatherCard;