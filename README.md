# Weather App (React + Vite)

A React-based weather application using Vite build tool and Axios for API calls.

## Tech Stack

- **React 18** – UI components
- **Vite** – Fast build tool and dev server
- **Axios** – HTTP client for OpenWeatherMap API
- **Environment Variables** – API key managed via `.env`

## Project Structure

```
weather-app/
├── public/
├── src/
│   ├── api/
│   │   └── weatherApi.js      # Axios instance + API calls
│   ├── components/
│   │   ├── SearchBar.jsx       # City input & buttons
│   │   └── WeatherCard.jsx     # Weather result display
│   ├── App.jsx                 # Main app with state & theme
│   ├── App.css                 # All styles + dark mode
│   └── main.jsx                # React DOM entry point
├── index.html
├── vite.config.js
├── .env                        # API key (do not commit)
├── .env.example                # Template for .env
└── package.json
```

## Setup & Run

1. Install dependencies:
   ```bash
   npm install
   ```

2. Configure your `.env` file:
   ```
   VITE_OPENWEATHER_API_KEY=your_api_key_here
   VITE_OPENWEATHER_BASE_URL=https://api.openweathermap.org/data/2.5/weather
   ```

3. Start the dev server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## Features

- Search weather by city name
- Get weather using browser geolocation
- Temperature, feels like, description, humidity, and icon
- Light / Dark theme toggle
- Error handling for invalid cities or network issues

## Environment Variables

| Variable | Description |
|---|---|
| `VITE_OPENWEATHER_API_KEY` | Your OpenWeatherMap API key |
| `VITE_OPENWEATHER_BASE_URL` | API base URL |

> ⚠️ Never commit `.env` to version control. Use `.env.example` as a template.