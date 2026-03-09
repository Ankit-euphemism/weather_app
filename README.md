# 🌤️ Gale Gallery — Weather App

A clean, responsive weather application built with **React 19 + Vite**, powered by the **OpenWeatherMap API**. Search any city or use your device's geolocation to get real-time weather data with a toggleable light/dark theme.

---

## ✨ Features

- 🔍 **Search by city name** — instant weather lookup
- 📍 **Geolocation support** — fetch weather for your current position
- 🌡️ **Rich weather stats** — temperature, feels like, humidity, wind speed, visibility, min/max temp
- 🌓 **Light / Dark theme toggle** — persistent within the session
- ⏳ **Loading spinner** — visual feedback during API calls
- ⚠️ **Error handling** — graceful messages for invalid cities or network issues
- 📱 **Responsive layout** — works on desktop and mobile

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **React 19** | UI components and state management |
| **Vite 7** | Build tool and dev server |
| **Axios** | HTTP client for OpenWeatherMap API |
| **ESLint** | Code linting with React-specific rules |
| **Vanilla CSS** | All styling including dark mode and animations |

---

## 📁 Project Structure

```
weather_app/
├── public/
│   ├── vite.svg
│   └── weather.png              # App favicon / brand asset
├── src/
│   ├── api/
│   │   └── weatherApi.js        # Axios instance + fetchWeatherByCity / fetchWeatherByCoords
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── SearchBar.jsx        # City input field & search / location buttons
│   │   └── WeatherCard.jsx      # Weather result display (temp, stats grid, icon)
│   ├── App.jsx                  # Root component — state, handlers, layout
│   ├── App.css                  # All styles: layout, cards, dark mode, animations
│   └── main.jsx                 # React DOM entry point
├── .env                         # Local env variables (do not commit)
├── .env.example                 # Template for required env variables
├── .gitignore
├── eslint.config.js             # ESLint flat config with React hooks plugin
├── index.html                   # Vite HTML entry point
├── package.json
└── vite.config.js               # Vite config with @vitejs/plugin-react
```

---

## ⚙️ Setup & Run

### 1. Clone the repository

```bash
git clone https://github.com/your-username/weather_app.git
cd weather_app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Copy the example file and fill in your API key:

```bash
cp .env.example .env
```

Edit `.env`:

```env
VITE_OPENWEATHER_API_KEY=your_openweathermap_api_key
VITE_OPENWEATHER_BASE_URL=https://api.openweathermap.org/data/2.5/weather
```

> Get a free API key at [openweathermap.org/api](https://openweathermap.org/api)

### 4. Start the development server

```bash
npm run dev
```

### 5. Other scripts

| Command | Description |
|---|---|
| `npm run dev` | Start Vite dev server (hot reload) |
| `npm run build` | Build for production → `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint across all source files |

---

## 🌐 Environment Variables

| Variable | Required | Description |
|---|---|---|
| `VITE_OPENWEATHER_API_KEY` | ✅ Yes | Your OpenWeatherMap API key |
| `VITE_OPENWEATHER_BASE_URL` | ✅ Yes | API base URL (`https://api.openweathermap.org/data/2.5/weather`) |

> ⚠️ **Never commit `.env` to version control.** Use `.env.example` as a reference template for collaborators.

---

## 🧩 Component Overview

### `App.jsx`
Root component that manages all application state (`weatherData`, `loading`, `error`, `darkMode`) and orchestrates API calls via handler functions passed as props.

### `SearchBar.jsx`
Renders the city input field along with a **Search** button and a **Use My Location** button. Accepts `onSearch`, `onLocationSearch`, and `loading` props.

### `WeatherCard.jsx`
Displays the full weather result including:
- City name & country flag
- Current temperature + "feels like"
- Weather condition icon (from OpenWeatherMap CDN)
- Stats grid: Humidity · Feels Like · Wind Speed · Visibility · Max Temp · Min Temp

### `weatherApi.js`
Configures a shared **Axios instance** with the base URL and API key pre-set. Exports two functions:
- `fetchWeatherByCity(city)` — queries by city name
- `fetchWeatherByCoords(lat, lon)` — queries by GPS coordinates

---

## 📦 Dependencies

### Runtime
- [`react`](https://react.dev/) `^19.2.0`
- [`react-dom`](https://react.dev/) `^19.2.0`
- [`axios`](https://axios-http.com/) `^1.13.5`

### Dev
- [`vite`](https://vite.dev/) `^7.3.1`
- [`@vitejs/plugin-react`](https://github.com/vitejs/vite-plugin-react) `^5.1.1`
- [`eslint`](https://eslint.org/) `^9.39.1`
- [`eslint-plugin-react-hooks`](https://www.npmjs.com/package/eslint-plugin-react-hooks) `^7.0.1`
- [`eslint-plugin-react-refresh`](https://github.com/ArnaudBarre/eslint-plugin-react-refresh) `^0.4.24`

---

## 📄 License

MIT © 2025