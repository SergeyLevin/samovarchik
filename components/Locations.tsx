import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { Button } from './ui/Button';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';

export const Locations: React.FC = () => {
  return (
    <section id="locations" className="py-20 bg-secondary-100 scroll-mt-28">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Ждем вас в гости!" 
          subtitle="Выберите ближайший к вам «Самоварчик» в Екатеринбурге" 
        />

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Location 1 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
            <h3 className="text-2xl font-serif font-bold text-primary-700 mb-6 border-b border-secondary-100 pb-4">
              ул. Металлургов, 70
            </h3>
            <div className="space-y-4 mb-8 flex-grow">
              <div className="flex items-start gap-3 text-secondary-700">
                <Clock className="text-primary-500 mt-1 shrink-0" size={20} />
                <div>
                  <span className="block font-semibold">Время работы:</span>
                  <span>08:00 – 17:00 (Ежедневно)</span>
                </div>
              </div>
              <div className="flex items-start gap-3 text-secondary-700">
                <Phone className="text-primary-500 mt-1 shrink-0" size={20} />
                <div>
                  <span className="block font-semibold">Телефоны:</span>
                  <div className="flex flex-col gap-1">
                    <a href="tel:+79126107078" className="hover:text-primary-600 transition-colors">+7 (912) 610-70-78</a>
                    <a href="tel:+79002001314" className="hover:text-primary-600 transition-colors">+7 (900) 200-13-14</a>
                  </div>
                </div>
              </div>
            </div>
            <Button 
              variant="outline" 
              className="w-full !border-primary-600 !text-primary-600 hover:!bg-primary-50 gap-2 mt-auto"
              onClick={() => window.open('https://2gis.ru/ekaterinburg/search/самоварчик/firm/70000001019993242/60.52073%2C56.829157?m=60.52073%2C56.829157%2F16', '_blank')}
            >
              <Navigation size={18} />
              Открыть в 2GIS
            </Button>
          </div>

          {/* Location 2 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
            <h3 className="text-2xl font-serif font-bold text-primary-700 mb-6 border-b border-secondary-100 pb-4">
              ул. Громова, 145
            </h3>
            <div className="space-y-4 mb-8 flex-grow">
              <div className="flex items-start gap-3 text-secondary-700">
                <Clock className="text-primary-500 mt-1 shrink-0" size={20} />
                <div>
                  <span className="block font-semibold">Время работы:</span>
                  <span>09:00 – 18:00 (Ежедневно)</span>
                </div>
              </div>
              <div className="flex items-start gap-3 text-secondary-700">
                <Phone className="text-primary-500 mt-1 shrink-0" size={20} />
                <div>
                  <span className="block font-semibold">Телефон:</span>
                  <a href="tel:+79126107078" className="hover:text-primary-600 transition-colors">+7 (912) 610-70-78</a>
                </div>
              </div>
            </div>
            <Button 
              variant="outline" 
              className="w-full !border-primary-600 !text-primary-600 hover:!bg-primary-50 gap-2 mt-auto"
              onClick={() => window.open('https://2gis.ru/ekaterinburg/firm/70000001092564349', '_blank')}
            >
              <Navigation size={18} />
              Открыть в 2GIS
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};