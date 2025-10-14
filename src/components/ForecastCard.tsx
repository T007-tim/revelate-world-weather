import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ForecastItem {
  dt: number;
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
  };
  weather: Array<{
    description: string;
    icon: string;
  }>;
}

interface ForecastCardProps {
  forecast: ForecastItem[];
}

export const ForecastCard = ({ forecast }: ForecastCardProps) => {
  // Group forecast by day (taking one entry per day)
  const dailyForecast = forecast.filter((item, index) => index % 8 === 0).slice(0, 5);

  const formatDate = (timestamp: number) => {
    return new Date(timestamp * 1000).toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <Card className="w-full max-w-6xl mx-auto bg-card/80 backdrop-blur-sm border-border/50 shadow-xl animate-fade-in">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">5-Day Forecast</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {dailyForecast.map((item, index) => (
            <div
              key={item.dt}
              className="flex flex-col items-center p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <p className="text-sm font-medium text-muted-foreground mb-2">
                {formatDate(item.dt)}
              </p>
              <img
                src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                alt={item.weather[0].description}
                className="w-16 h-16"
              />
              <p className="text-2xl font-bold text-primary mb-1">
                {Math.round(item.main.temp)}°C
              </p>
              <p className="text-xs text-muted-foreground capitalize text-center">
                {item.weather[0].description}
              </p>
              <div className="flex gap-2 mt-2 text-xs">
                <span className="text-destructive">↑{Math.round(item.main.temp_max)}°</span>
                <span className="text-secondary">↓{Math.round(item.main.temp_min)}°</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
