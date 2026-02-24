import React, { useEffect } from 'react';
import { X, Clock, Phone, Navigation } from 'lucide-react';
import { Button } from './ui/Button';

interface LocationsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LocationsModal: React.FC<LocationsModalProps> = ({ isOpen, onClose }) => {
  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      {/* Overlay click to close */}
      <div 
        className="absolute inset-0" 
        onClick={onClose}
      />
      
      <div className="relative bg-white rounded-xl overflow-hidden w-full max-w-4xl max-h-[90vh] shadow-2xl animate-in zoom-in-95 duration-200 flex flex-col">
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-black/10 hover:bg-black/20 text-secondary-900 p-2 rounded-full transition-colors"
        >
          <X size={24} />
        </button>

        {/* Content */}
        <div className="overflow-y-auto p-8 bg-secondary-50">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-serif font-bold text-secondary-900 mb-2">Наши адреса</h2>
            <p className="text-secondary-600">Выберите ближайший к вам «Самоварчик»</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
             {/* Location 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-secondary-200 flex flex-col">
              <h3 className="text-xl font-serif font-bold text-primary-700 mb-4 border-b border-secondary-100 pb-3">
                ул. Металлургов, 70
              </h3>
              <div className="space-y-3 mb-6 flex-grow">
                <div className="flex items-start gap-3 text-secondary-700">
                  <Clock className="text-primary-500 mt-1 shrink-0" size={18} />
                  <div>
                    <span className="block font-semibold text-sm">Время работы:</span>
                    <span className="text-sm">08:00 – 17:00 (Ежедневно)</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-secondary-700">
                  <Phone className="text-primary-500 mt-1 shrink-0" size={18} />
                  <div>
                    <span className="block font-semibold text-sm">Телефоны:</span>
                    <div className="flex flex-col gap-1">
                      <a href="tel:+79126107078" className="text-sm hover:text-primary-600 transition-colors">+7 (912) 610-70-78</a>
                      <a href="tel:+79002001314" className="text-sm hover:text-primary-600 transition-colors">+7 (900) 200-13-14</a>
                    </div>
                  </div>
                </div>
              </div>
              <Button 
                variant="outline" 
                size="sm"
                className="w-full !border-primary-600 !text-primary-600 hover:!bg-primary-50 gap-2 mt-auto"
                onClick={() => window.open('https://2gis.ru/ekaterinburg/search/самоварчик/firm/70000001019993242/60.52073%2C56.829157?m=60.52073%2C56.829157%2F16', '_blank')}
              >
                <Navigation size={16} />
                Открыть в 2GIS
              </Button>
            </div>

            {/* Location 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-secondary-200 flex flex-col">
              <h3 className="text-xl font-serif font-bold text-primary-700 mb-4 border-b border-secondary-100 pb-3">
                ул. Громова, 145
              </h3>
              <div className="space-y-3 mb-6 flex-grow">
                <div className="flex items-start gap-3 text-secondary-700">
                  <Clock className="text-primary-500 mt-1 shrink-0" size={18} />
                  <div>
                    <span className="block font-semibold text-sm">Время работы:</span>
                    <span className="text-sm">09:00 – 18:00 (Ежедневно)</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-secondary-700">
                  <Phone className="text-primary-500 mt-1 shrink-0" size={18} />
                  <div>
                    <span className="block font-semibold text-sm">Телефон:</span>
                    <a href="tel:+79126107078" className="text-sm hover:text-primary-600 transition-colors">+7 (912) 610-70-78</a>
                  </div>
                </div>
              </div>
              <Button 
                variant="outline" 
                size="sm"
                className="w-full !border-primary-600 !text-primary-600 hover:!bg-primary-50 gap-2 mt-auto"
                onClick={() => window.open('https://2gis.ru/ekaterinburg/firm/70000001092564349', '_blank')}
              >
                <Navigation size={16} />
                Открыть в 2GIS
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};