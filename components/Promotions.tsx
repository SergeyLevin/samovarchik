import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { Clock } from 'lucide-react';

export const Promotions: React.FC = () => {
  return (
    <section id="promotions" className="py-20 bg-red-50/50 scroll-mt-28">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Наши Акции" 
          subtitle="Делаем вкусную еду еще доступнее для вас и вашей семьи." 
        />

        <div className="max-w-2xl mx-auto">
          {/* Promo 1 */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-red-100 flex flex-col hover:shadow-xl transition-shadow duration-300">
            <div className="bg-primary-600 p-4 text-white flex items-center gap-2">
              <Clock size={20} />
              <span className="font-bold">Ежедневно 12:00 – 16:00</span>
            </div>
            <div className="p-8 flex-grow">
              <h3 className="text-2xl font-bold font-serif text-secondary-900 mb-4">Комплексный обед</h3>
              <p className="text-secondary-600 mb-6">
                Полноценный обед для отличного настроения! В состав входит:
              </p>
              <ul className="space-y-2 mb-8 text-secondary-700">
                <li className="flex items-center gap-2"><span className="w-2 h-2 bg-primary-600 rounded-full"></span>Суп дня</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 bg-primary-600 rounded-full"></span>Горячее блюдо</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 bg-primary-600 rounded-full"></span>Салат</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 bg-primary-600 rounded-full"></span>Напиток</li>
              </ul>
              <a 
                href="https://t.me/samovarchik_bot" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full font-bold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500 shadow-md px-6 py-3 text-base w-full"
              >
                Подробнее
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};