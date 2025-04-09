import React from 'react';
import { Map } from 'lucide-react';

export const Navigation: React.FC = () => {
  return (
    <nav className="bg-blue-600 text-white py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Map className="w-6 h-6" />
          <h1 className="text-2xl font-bold">İl İl Türkiyem</h1>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#map" className="hover:text-blue-200 transition-colors">Harita</a>
          <a href="#cities" className="hover:text-blue-200 transition-colors">Şehirler</a>
          <a href="#about" className="hover:text-blue-200 transition-colors">Hakkımızda</a>
          <a href="#purpose" className="hover:text-blue-200 transition-colors">Amaç</a>
        </div>
      </div>
    </nav>
  );
};