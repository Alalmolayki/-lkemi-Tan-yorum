import React from 'react';
import { MapRegion } from './MapRegion';

interface TurkeyMapProps {
  onCitySelect: (cityId: string) => void;
}

export const TurkeyMap: React.FC<TurkeyMapProps> = ({ onCitySelect }) => {
  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
      <svg
        viewBox="0 0 800 400"
        className="w-full h-auto"
        style={{ minHeight: '400px' }}
      >
        <MapRegion id="istanbul" name="İstanbul" x={300} y={50} width={80} height={40} onSelect={onCitySelect} />
        <MapRegion id="kocaeli" name="Kocaeli" x={390} y={50} width={80} height={40} onSelect={onCitySelect} />
        <MapRegion id="bursa" name="Bursa" x={280} y={100} width={80} height={40} onSelect={onCitySelect} />
        <MapRegion id="izmir" name="İzmir" x={200} y={150} width={80} height={40} onSelect={onCitySelect} />
        <MapRegion id="ankara" name="Ankara" x={400} y={150} width={80} height={40} onSelect={onCitySelect} />
        <MapRegion id="antalya" name="Antalya" x={300} y={250} width={80} height={40} onSelect={onCitySelect} />
        <MapRegion id="adana" name="Adana" x={450} y={250} width={80} height={40} onSelect={onCitySelect} />
      </svg>
    </div>
  );
};