import { useEffect, useState } from "react";
import { Crosshair, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import type { Units } from "@/lib/weatherApi";

interface SearchBarProps {
  onSearch: (city: string) => void;
  onUseLocation?: () => void;
  units?: Units;
  onUnitsChange?: (units: Units) => void;
  isLoading?: boolean;
  initialCity?: string;
}

export const SearchBar = ({ onSearch, onUseLocation, units = "metric", onUnitsChange, isLoading, initialCity }: SearchBarProps) => {
  const [city, setCity] = useState(initialCity || "");

  useEffect(() => {
    if (initialCity) setCity(initialCity);
  }, [initialCity]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-3xl mx-auto">
      <div className="relative flex flex-col md:flex-row gap-3 md:gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search for any city... (e.g., Nairobi, New York, Tokyo)"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="pl-10 h-12 text-base bg-card/80 backdrop-blur-sm border-border/50 focus:border-primary transition-all"
          />
        </div>
        <div className="flex items-center gap-2">
          <ToggleGroup type="single" value={units} onValueChange={(v) => v && onUnitsChange && onUnitsChange(v as Units)}>
            <ToggleGroupItem value="metric" aria-label="Metric" className="h-12 px-3">°C</ToggleGroupItem>
            <ToggleGroupItem value="imperial" aria-label="Imperial" className="h-12 px-3">°F</ToggleGroupItem>
          </ToggleGroup>
          <Button 
            type="button" 
            variant="secondary"
            size="lg"
            disabled={isLoading}
            onClick={onUseLocation}
            className="h-12 px-4"
            title="Use my location"
          >
            <Crosshair />
            Locate
          </Button>
          <Button 
            type="submit" 
            size="lg"
            disabled={isLoading || !city.trim()}
            className="h-12 px-6"
          >
            {isLoading ? "Searching..." : "Search"}
          </Button>
        </div>
      </div>
    </form>
  );
};
