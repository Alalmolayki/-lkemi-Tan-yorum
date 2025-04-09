import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { LeafletMap } from './components/LeafletMap';
import { CityInfo } from './components/CityInfo';
import { Purpose } from './components/Purpose';
import { AboutUs } from './components/AboutUs';
import { citiesData } from './data/cities';

function App() {
  const [selectedCity, setSelectedCity] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        <section id="map">
          <LeafletMap onCitySelect={setSelectedCity} />
        </section>
        
        {selectedCity && citiesData[selectedCity] && (
          <section id="cities">
            <CityInfo city={citiesData[selectedCity]} />
          </section>
        )}
        
        <section id="purpose">
          <Purpose />
        </section>

        <section id="about">
          <AboutUs />
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 İl İl Türkiyem. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;