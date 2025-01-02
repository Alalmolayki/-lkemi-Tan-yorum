import React from 'react';

interface MapRegionProps {
  id: string;
  name: string;
  x: number;
  y: number;
  width: number;
  height: number;
  onSelect: (id: string) => void;
}

export const MapRegion: React.FC<MapRegionProps> = ({
  id,
  name,
  x,
  y,
  width,
  height,
  onSelect,
}) => {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        className="fill-gray-200 hover:fill-blue-500 cursor-pointer transition-colors stroke-gray-400"
        onClick={() => onSelect(id)}
        rx={4}
      />
      <text
        x={x + width / 2}
        y={y + height / 2}
        className="text-xs font-medium fill-gray-700 pointer-events-none"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {name}
      </text>
    </g>
  );
};