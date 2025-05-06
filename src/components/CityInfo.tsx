import React from 'react';
import { CityInfo as CityInfoType } from '../types/city';
import { Building2, Users, Wheat, Beef, Factory, Plane, TrendingUp } from 'lucide-react';

interface CityInfoProps {
  city: CityInfoType;
}

export const CityInfo: React.FC<CityInfoProps> = ({ city }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <img
            src={city.imageUrl}
            alt={city.name}
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{city.name}</h2>
          
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-600" />
              <span className="text-gray-700">Nüfus: {city.population}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-green-600" />
              <span className="text-gray-700">Ekonomi: {city.economy}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Wheat className="w-5 h-5 text-yellow-600" />
              <span className="text-gray-700">Tarım: {city.agriculture}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Beef className="w-5 h-5 text-brown-600" />
              <span className="text-gray-700">Hayvancılık: {city.livestock}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Factory className="w-5 h-5 text-gray-600" />
              <span className="text-gray-700">Endüstri: {city.industry}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Plane className="w-5 h-5 text-purple-600" />
              <span className="text-gray-700">Turizm: {city.tourism}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Building2 className="w-5 h-5 text-indigo-600" />
              <div className="flex flex-wrap gap-2">
                {city.sectors.map((sector, index) => (
                  <span
                    key={index}
                    className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-sm"
                  >
                    {sector}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};