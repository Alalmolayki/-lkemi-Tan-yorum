import React from 'react';

interface MapPathProps {
  onCitySelect: (cityId: string) => void;
}

export const TurkeyMapPaths: React.FC<MapPathProps> = ({ onCitySelect }) => {
  return (
    <>
      {/* Istanbul */}
      <path
        d="M246.5 39.5l1.2-0.8 1.1-0.4 1.8 0.2 0.8 0.4 1.6 1.3 0.4 1.1-0.2 1.4 0.3 0.8 1.7 0.9 0.9 1.2-0.1 1.6-0.7 0.6-1.9-0.4-1.1 0.3-1.8-0.8-1.5-1.2-1.1-1.9-0.5-1.6-0.9-2.7z"
        className="cursor-pointer hover:fill-blue-500 transition-colors"
        onClick={() => onCitySelect('istanbul')}
        fill="#e5e7eb"
      />
      {/* Ankara */}
      <path
        d="M382.5 168.5l2.1 0.8 1.6 1.2 1.2 1.5 0.9 1.7 0.5 1.9 0.2 2-0.2 2-0.5 1.9-0.9 1.7-1.2 1.5-1.6 1.2-2.1 0.8-2.3 0.3-2.3-0.3-2.1-0.8-1.6-1.2-1.2-1.5-0.9-1.7-0.5-1.9-0.2-2 0.2-2 0.5-1.9 0.9-1.7 1.2-1.5 1.6-1.2 2.1-0.8 2.3-0.3 2.3 0.3z"
        className="cursor-pointer hover:fill-blue-500 transition-colors"
        onClick={() => onCitySelect('ankara')}
        fill="#e5e7eb"
      />
      {/* Add more city paths as needed */}
    </>
  );
};