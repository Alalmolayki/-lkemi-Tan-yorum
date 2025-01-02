import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import { CityInfo } from '../types/city';

interface MapMarkerProps {
  cityId: string;
  city: CityInfo;
  coordinates: [number, number];
  onSelect: (cityId: string) => void;
}

const icon = new Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

export const MapMarker: React.FC<MapMarkerProps> = ({
  cityId,
  city,
  coordinates,
  onSelect
}) => {
  return (
    <Marker
      position={coordinates}
      icon={icon}
      eventHandlers={{
        click: () => onSelect(cityId)
      }}
    >
      <Popup>
        <div className="font-semibold">{city.name}</div>
      </Popup>
    </Marker>
  );
};