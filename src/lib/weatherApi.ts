// OpenWeatherMap API integration for Anga-Yetu-Hub
const API_KEY = "bd5e378503939ddaee76f12ad7a97608"; // Demo API key
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export type Units = "metric" | "imperial";
const DEFAULT_UNITS: Units = "metric";

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
  const response = await fetch(
    `${BASE_URL}/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=${units}`
  );
  
  if (!response.ok) {
    if (response.status === 404) {
      throw new Error(`City "${city}" not found. Please check the spelling.`);
    }
    throw new Error("Unable to fetch weather data");
  }
  
  return response.json();
};

export const getForecast = async (
  city: string,
  units: Units = DEFAULT_UNITS
): Promise<ForecastData> => {
  const response = await fetch(
    `${BASE_URL}/forecast?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=${units}`
  );
  
  if (!response.ok) {
    throw new Error("Forecast not available");
  }
  
  return response.json();
};

export const getWeatherByCoords = async (
  latitude: number,
  longitude: number,
  units: Units = DEFAULT_UNITS
): Promise<WeatherData> => {
  const response = await fetch(
    `${BASE_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=${units}`
  );

  if (!response.ok) {
    throw new Error("Location not found");
  }

  return response.json();
};

export const getForecastByCoords = async (
  latitude: number,
  longitude: number,
  units: Units = DEFAULT_UNITS
): Promise<ForecastData> => {
  const response = await fetch(
    `${BASE_URL}/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=${units}`
  );

  if (!response.ok) {
    throw new Error("Forecast not available");
  }

  return response.json();
};
