// OpenWeatherMap API integration
// Get your free API key at: https://openweathermap.org/api
// 1. Sign up at https://home.openweathermap.org/users/sign_up
// 2. Generate an API key from your account dashboard
// 3. Replace the API_KEY below with your own key

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY || "YOUR_API_KEY_HERE";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export type Units = "metric" | "imperial";
const DEFAULT_UNITS: Units = "metric";

if (API_KEY === "YOUR_API_KEY_HERE") {
  console.warn(
    "⚠️ OpenWeatherMap API key not configured. Get your free key at https://openweathermap.org/api"
  );
}

export interface WeatherData {
  name: string;
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
    pressure: number;
  };
  weather: Array<{
    main: string;
    description: string;
    icon: string;
  }>;
  wind: {
    speed: number;
  };
  visibility: number;
}

export interface ForecastData {
  list: Array<{
    dt: number;
    main: {
      temp: number;
      temp_min: number;
      temp_max: number;
      humidity: number;
    };
    weather: Array<{
      description: string;
      icon: string;
    }>;
  }>;
}

export const getWeather = async (
  city: string,
  units: Units = DEFAULT_UNITS
): Promise<WeatherData> => {
  if (API_KEY === "YOUR_API_KEY_HERE") {
    throw new Error("Please configure your OpenWeatherMap API key. Get one free at https://openweathermap.org/api");
  }
  
  const response = await fetch(
    `${BASE_URL}/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=${units}`
  );
  
  if (!response.ok) {
    if (response.status === 401) {
      throw new Error("Invalid API key. Please check your OpenWeatherMap API key configuration.");
    }
    throw new Error("City not found");
  }
  
  return response.json();
};

export const getForecast = async (
  city: string,
  units: Units = DEFAULT_UNITS
): Promise<ForecastData> => {
  if (API_KEY === "YOUR_API_KEY_HERE") {
    throw new Error("Please configure your OpenWeatherMap API key. Get one free at https://openweathermap.org/api");
  }
  
  const response = await fetch(
    `${BASE_URL}/forecast?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=${units}`
  );
  
  if (!response.ok) {
    if (response.status === 401) {
      throw new Error("Invalid API key. Please check your OpenWeatherMap API key configuration.");
    }
    throw new Error("Forecast not available");
  }
  
  return response.json();
};

export const getWeatherByCoords = async (
  latitude: number,
  longitude: number,
  units: Units = DEFAULT_UNITS
): Promise<WeatherData> => {
  if (API_KEY === "YOUR_API_KEY_HERE") {
    throw new Error("Please configure your OpenWeatherMap API key. Get one free at https://openweathermap.org/api");
  }

  const response = await fetch(
    `${BASE_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=${units}`
  );

  if (!response.ok) {
    if (response.status === 401) {
      throw new Error("Invalid API key. Please check your OpenWeatherMap API key configuration.");
    }
    throw new Error("Location not found");
  }

  return response.json();
};

export const getForecastByCoords = async (
  latitude: number,
  longitude: number,
  units: Units = DEFAULT_UNITS
): Promise<ForecastData> => {
  if (API_KEY === "YOUR_API_KEY_HERE") {
    throw new Error("Please configure your OpenWeatherMap API key. Get one free at https://openweathermap.org/api");
  }

  const response = await fetch(
    `${BASE_URL}/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=${units}`
  );

  if (!response.ok) {
    if (response.status === 401) {
      throw new Error("Invalid API key. Please check your OpenWeatherMap API key configuration.");
    }
    throw new Error("Forecast not available");
  }

  return response.json();
};
