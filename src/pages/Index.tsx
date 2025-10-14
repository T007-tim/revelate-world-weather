import { useState } from "react";
import { SearchBar } from "@/components/SearchBar";
import { WeatherCard } from "@/components/WeatherCard";
import { ForecastCard } from "@/components/ForecastCard";
import { WeatherChart } from "@/components/WeatherChart";
import { getWeather, getForecast, WeatherData, ForecastData } from "@/lib/weatherApi";
import { useToast } from "@/hooks/use-toast";
import { Cloud, CloudRain, Sun, CloudSun } from "lucide-react";

const Index = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [forecastData, setForecastData] = useState<ForecastData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSearch = async (city: string) => {
    setIsLoading(true);
    try {
      const [weather, forecast] = await Promise.all([
        getWeather(city),
        getForecast(city)
      ]);
      
      setWeatherData(weather);
      setForecastData(forecast);
      
      toast({
        title: "Weather loaded successfully",
        description: `Showing weather for ${weather.name}, ${weather.sys.country}`,
      });
    } catch (error) {
      toast({
        title: "Error loading weather",
        description: "Please check the city name and try again.",
        variant: "destructive",
      });
      setWeatherData(null);
      setForecastData(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-day relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Cloud className="absolute top-20 left-10 w-32 h-32 text-white/20 animate-float" />
        <CloudSun className="absolute top-40 right-20 w-40 h-40 text-white/20 animate-float" style={{ animationDelay: '1s' }} />
        <CloudRain className="absolute bottom-40 left-1/4 w-36 h-36 text-white/20 animate-float" style={{ animationDelay: '2s' }} />
        <Sun className="absolute top-10 right-1/4 w-24 h-24 text-yellow-300/30 animate-float" style={{ animationDelay: '0.5s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg">
            Revelate Weather
          </h1>
          <p className="text-xl md:text-2xl text-white/90 drop-shadow-md max-w-2xl mx-auto">
            Real-time weather insights from anywhere in the world
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-12 animate-slide-up">
          <SearchBar onSearch={handleSearch} isLoading={isLoading} />
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-white border-t-transparent"></div>
            <p className="text-white text-xl mt-4">Loading weather data...</p>
          </div>
        )}

        {/* Weather Display */}
        {weatherData && !isLoading && (
          <div className="space-y-6">
            <WeatherCard data={weatherData} />
            {forecastData && (
              <>
                <WeatherChart forecast={forecastData.list} />
                <ForecastCard forecast={forecastData.list} />
              </>
            )}
          </div>
        )}

        {/* Initial State */}
        {!weatherData && !isLoading && (
          <div className="text-center py-20 animate-fade-in">
            <CloudSun className="w-32 h-32 text-white/80 mx-auto mb-6 animate-float" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Welcome to Revelate Weather
            </h2>
            <p className="text-xl text-white/90 max-w-lg mx-auto">
              Search for any city to reveal detailed weather information, forecasts, and trends
            </p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="relative z-10 text-center py-8 text-white/80">
        <p className="text-sm">
          Powered by OpenWeatherMap API | Built with React, Tailwind & Recharts
        </p>
        <p className="text-xs mt-2">
          © 2025 Revelate Weather Dashboard
        </p>
      </footer>
    </div>
  );
};

export default Index;
