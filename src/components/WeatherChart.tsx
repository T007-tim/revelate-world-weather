import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Units } from "@/lib/weatherApi";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

interface ForecastItem {
  dt: number;
  main: {
    temp: number;
    humidity: number;
  };
}

interface WeatherChartProps {
  forecast: ForecastItem[];
  units?: Units;
}

export const WeatherChart = ({ forecast, units = "metric" }: WeatherChartProps) => {
  // Take every 3rd item to show 8 data points (24 hours of data)
  const chartData = forecast.slice(0, 8).map((item) => ({
    time: new Date(item.dt * 1000).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    }),
    temperature: Math.round(item.main.temp),
    humidity: item.main.humidity
  }));

  return (
    <Card className="w-full max-w-6xl mx-auto bg-card/80 backdrop-blur-sm border-border/50 shadow-xl animate-fade-in">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Temperature & Humidity Trends</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              dataKey="time" 
              stroke="hsl(var(--muted-foreground))"
              style={{ fontSize: '12px' }}
            />
            <YAxis 
              yAxisId="temp"
              stroke="hsl(var(--primary))"
              style={{ fontSize: '12px' }}
              label={{ value: `Temperature (°${units === "metric" ? "C" : "F"})`, angle: -90, position: 'insideLeft' }}
            />
            <YAxis 
              yAxisId="humidity"
              orientation="right"
              stroke="hsl(var(--secondary))"
              style={{ fontSize: '12px' }}
              label={{ value: 'Humidity (%)', angle: 90, position: 'insideRight' }}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px'
              }}
            />
            <Legend />
            <Line
              yAxisId="temp"
              type="monotone"
              dataKey="temperature"
              stroke="hsl(var(--primary))"
              strokeWidth={3}
              dot={{ fill: 'hsl(var(--primary))', r: 4 }}
              activeDot={{ r: 6 }}
              name={`Temperature (°${units === "metric" ? "C" : "F"})`}
            />
            <Line
              yAxisId="humidity"
              type="monotone"
              dataKey="humidity"
              stroke="hsl(var(--secondary))"
              strokeWidth={3}
              dot={{ fill: 'hsl(var(--secondary))', r: 4 }}
              activeDot={{ r: 6 }}
              name="Humidity (%)"
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
