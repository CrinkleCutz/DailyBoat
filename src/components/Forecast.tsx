import { ForecastCard, ForecastData } from './ForecastCard'

// Mock data - this would normally come from an API
const forecastData: ForecastData[] = [
  {
    date: 'Tomorrow',
    condition: 'sunny',
    highTemp: 32,
    lowTemp: 18,
  },
  {
    date: 'Saturday',
    condition: 'cloudy',
    highTemp: 28,
    lowTemp: 15,
  },
  {
    date: 'Sunday',
    condition: 'rainy',
    highTemp: 25,
    lowTemp: 12,
  },
]

export function Forecast() {
  return (
    <div className="w-full max-w-4xl">
      <h2 className="text-xl font-semibold mb-4">3-Day Forecast</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {forecastData.map((forecast) => (
          <ForecastCard key={forecast.date} forecast={forecast} />
        ))}
      </div>
    </div>
  )
}