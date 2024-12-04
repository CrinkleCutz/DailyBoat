import { Thermometer, Cloud, Wind } from 'lucide-react'

interface WeatherData {
  temperature: number
  snowDepth: number
  windSpeed: number
}

// This would normally come from an API, using mock data for demonstration
const weatherData: WeatherData = {
  temperature: 28,
  snowDepth: 48,
  windSpeed: 12,
}

export function WeatherStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl">
      <div className="bg-gray-800 rounded-xl p-6 flex items-center gap-4">
        <Thermometer className="w-8 h-8 text-red-400" />
        <div>
          <p className="text-gray-400 text-sm">Temperature</p>
          <p className="text-2xl font-bold">{weatherData.temperature}°F</p>
        </div>
      </div>
      
      <div className="bg-gray-800 rounded-xl p-6 flex items-center gap-4">
        <Cloud className="w-8 h-8 text-blue-400" />
        <div>
          <p className="text-gray-400 text-sm">Snow Depth</p>
          <p className="text-2xl font-bold">{weatherData.snowDepth}"</p>
        </div>
      </div>

      <div className="bg-gray-800 rounded-xl p-6 flex items-center gap-4">
        <Wind className="w-8 h-8 text-gray-400" />
        <div>
          <p className="text-gray-400 text-sm">Wind Speed</p>
          <p className="text-2xl font-bold">{weatherData.windSpeed} mph</p>
        </div>
      </div>
    </div>
  )
}