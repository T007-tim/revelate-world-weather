import { Cloud, Droplets, Wind, Sunrise, Sunset, Eye, Gauge } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Units } from "@/lib/weatherApi";

interface WeatherData {
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

interface WeatherCardProps {
  data: WeatherData;
  units?: Units;
}

export const WeatherCard = ({ data, units = "metric" }: WeatherCardProps) => {
  const formatTime = (timestamp: number) => {
    return new Date(timestamp * 1000).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const weatherIconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;

  return (
    <div className="w-full max-w-6xl mx-auto animate-slide-up">
      {/* Main Weather Card */}
      <Card className="mb-6 bg-card/80 backdrop-blur-sm border-border/50 shadow-xl">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">
            {data.name}, {data.sys.country}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Temperature Display */}
            <div className="flex items-center gap-6">
              <img 
                src={weatherIconUrl} 
                alt={data.weather[0].description}
                className="w-32 h-32 animate-float"
              />
              <div>
                <div className="text-7xl font-bold text-primary">
                  {Math.round(data.main.temp)}°{units === "metric" ? "C" : "F"}
                </div>
                <p className="text-xl text-muted-foreground capitalize mt-2">
                  {data.weather[0].description}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Feels like {Math.round(data.main.feels_like)}°{units === "metric" ? "C" : "F"}
                </p>
              </div>
            </div>

            {/* Temperature Range */}
            <div className="text-center md:text-right">
              <div className="space-y-2">
                <div className="flex items-center gap-2 justify-center md:justify-end">
                  <span className="text-muted-foreground">High:</span>
                  <span className="text-2xl font-semibold text-destructive">
                    {Math.round(data.main.temp_max)}°
                  </span>
                </div>
                <div className="flex items-center gap-2 justify-center md:justify-end">
                  <span className="text-muted-foreground">Low:</span>
                  <span className="text-2xl font-semibold text-secondary">
                    {Math.round(data.main.temp_min)}°
                  </span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Weather Details Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <Card className="bg-card/80 backdrop-blur-sm border-border/50">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <Droplets className="h-8 w-8 text-primary mb-2" />
            <p className="text-sm text-muted-foreground mb-1">Humidity</p>
            <p className="text-2xl font-bold">{data.main.humidity}%</p>
          </CardContent>
        </Card>

        <Card className="bg-card/80 backdrop-blur-sm border-border/50">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <Wind className="h-8 w-8 text-primary mb-2" />
            <p className="text-sm text-muted-foreground mb-1">Wind Speed</p>
            <p className="text-2xl font-bold">{data.wind.speed} {units === "metric" ? "m/s" : "mph"}</p>
          </CardContent>
        </Card>

        <Card className="bg-card/80 backdrop-blur-sm border-border/50">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <Gauge className="h-8 w-8 text-primary mb-2" />
            <p className="text-sm text-muted-foreground mb-1">Pressure</p>
            <p className="text-2xl font-bold">{data.main.pressure} hPa</p>
          </CardContent>
        </Card>

        <Card className="bg-card/80 backdrop-blur-sm border-border/50">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <Sunrise className="h-8 w-8 text-primary mb-2" />
            <p className="text-sm text-muted-foreground mb-1">Sunrise</p>
            <p className="text-2xl font-bold">{formatTime(data.sys.sunrise)}</p>
          </CardContent>
        </Card>

        <Card className="bg-card/80 backdrop-blur-sm border-border/50">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <Sunset className="h-8 w-8 text-primary mb-2" />
            <p className="text-sm text-muted-foreground mb-1">Sunset</p>
            <p className="text-2xl font-bold">{formatTime(data.sys.sunset)}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
