import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { citiesData } from '../data/cities';
import { cityCoordinates } from '../data/coordinates';

interface LeafletMapProps {
  onCitySelect: (cityId: string) => void;
}

// Custom icon configuration
const icon = new Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34]
});

export const LeafletMap: React.FC<LeafletMapProps> = ({ onCitySelect }) => {
  return (
    <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-lg">
      <MapContainer
        center={[39.0, 35.0]}
        zoom={6}
        className="w-full h-full"
        minZoom={6}
        maxZoom={10}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {Object.entries(cityCoordinates).map(([cityId, [lat, lng]]) => {
          const city = citiesData[cityId];
          if (!city) return null;
          
          return (
            <Marker
              key={cityId}
              position={[lat, lng]}
              icon={icon}
              eventHandlers={{
                click: () => onCitySelect(cityId)
              }}
            >
              <Popup>
                <div className="font-semibold">{city.name}</div>
                <div className="text-sm text-gray-600">{city.population}</div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};