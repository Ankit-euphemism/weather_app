import axios from 'axios'

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY
const BASE_URL = import.meta.env.VITE_OPENWEATHER_BASE_URL

const weatherApi = axios.create({
  baseURL: BASE_URL,
  params: {
    appid: API_KEY,
    units: 'metric',
  },
})

export const fetchWeatherByCity = (city) =>
  weatherApi.get('', { params: { q: city } })

export const fetchWeatherByCoords = (lat, lon) =>
  weatherApi.get('', { params: { lat, lon } })