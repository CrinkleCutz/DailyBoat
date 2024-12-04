import { Cloud, CloudRain, Sun } from 'lucide-react'

export interface ForecastData {
  date: string
  condition: 'sunny' | 'cloudy' | 'rainy'
  highTemp: number
  lowTemp: number
}

interface ForecastCardProps {
  forecast: ForecastData
}

export function ForecastCard({ forecast }: ForecastCardProps) {
  const getWeatherIcon = (condition: ForecastData['condition']) => {
    switch (condition) {
      case 'sunny':
        return <Sun className="w-8 h-8 text-yellow-400" />
      case 'cloudy':
        return <Cloud className="w-8 h-8 text-gray-400" />
      case 'rainy':
        return <CloudRain className="w-8 h-8 text-blue-400" />
    }
  }

  return (
    <div className="bg-gray-800 rounded-xl p-6 flex flex-col items-center gap-3">
      <p className="text-gray-400 text-sm">{forecast.date}</p>
      {getWeatherIcon(forecast.condition)}
      <div className="text-center">
        <p className="text-xl font-bold">{forecast.highTemp}°F</p>
        <p className="text-gray-400 text-sm">{forecast.lowTemp}°F</p>
      </div>
    </div>
  )
}