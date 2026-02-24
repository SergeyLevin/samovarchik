import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { Promotions } from './components/Promotions';
import { Features } from './components/Features';
import { Locations } from './components/Locations';
import { Delivery } from './components/Delivery';
import { Footer } from './components/Footer';
import { MenuModal } from './components/MenuModal';
import { LocationsModal } from './components/LocationsModal';

function App() {
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);
  const [isLocationsModalOpen, setIsLocationsModalOpen] = useState(false);

  const scrollToMenu = () => {
    const menuElement = document.getElementById('menu');
    if (menuElement) {
      menuElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToLocations = () => {
    const locationsElement = document.getElementById('locations');
    if (locationsElement) {
      locationsElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero 
          onOpenMenu={scrollToMenu} 
          onOpenLocations={scrollToLocations}
        />
        <MenuSection />
        <Promotions />
        <Features />
        <Locations />
        <Delivery />
      </main>
      <Footer />
      
      <MenuModal 
        isOpen={isMenuModalOpen} 
        onClose={() => setIsMenuModalOpen(false)} 
      />

      <LocationsModal 
        isOpen={isLocationsModalOpen} 
        onClose={() => setIsLocationsModalOpen(false)} 
      />
    </div>
  );
}

export default App;