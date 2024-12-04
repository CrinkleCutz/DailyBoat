import './index.css'
import { Header } from './components/Header'
import { WeatherStats } from './components/WeatherStats'
import { Forecast } from './components/Forecast'
import { Map } from './components/Map'
import { WebPreview } from './components/WebPreview'
import { HotSpringsPreview } from './components/HotSpringsPreview'

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-black text-white">
      <Header />
      <main className="w-full px-4 py-6 flex flex-col items-center gap-8">
        <WeatherStats />
        <Forecast />
        <WebPreview />
        <Map />
        <HotSpringsPreview />
      </main>
    </div>
  )
}

export default App