import { MapContainer, TileLayer, ScaleControl, Marker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

// Steamboat Resort coordinates
const STEAMBOAT_RESORT_COORDS: [number, number] = [40.4572, -106.8045]
const ZOOM_LEVEL = 14 // Slightly closer zoom to better show the resort area

// Need to fix the default marker icon issue in react-leaflet
// This is needed because the default marker icons are not properly loaded in Vite
import L from 'leaflet'
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
})
L.Marker.prototype.options.icon = DefaultIcon

export function Map() {
  return (
    <div className="w-full max-w-4xl">
      <MapContainer
        center={STEAMBOAT_RESORT_COORDS}
        zoom={ZOOM_LEVEL}
        scrollWheelZoom={true}
        className="border border-gray-700"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={STEAMBOAT_RESORT_COORDS} />
        <ScaleControl imperial />
      </MapContainer>
    </div>
  )
}