import React, { useState } from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { Coffee, Soup, Beef, Salad, Croissant, Milk, Wheat, ChevronRight } from 'lucide-react';

const categories = [
  { id: 'soups', name: 'Супы', icon: Soup },
  { id: 'main', name: 'Горячее', icon: Beef },
  { id: 'sides', name: 'Гарниры', icon: Wheat },
  { id: 'salads', name: 'Салаты', icon: Salad },
  { id: 'pastry', name: 'Выпечка', icon: Croissant },
  { id: 'drinks', name: 'Напитки', icon: Milk },
];

const menuData: Record<string, { name: string, price: number, description: string, image: string }[]> = {
  soups: [
    { name: 'Борщ', price: 95, description: 'На наваристом говяжьем бульоне', image: '/images/borsh.webp' },
    { name: 'Солянка мясная', price: 135, description: 'Сборная мясная солянка', image: '/images/solyanka.webp' },
    { name: 'Суп куриный с лапшой', price: 85, description: 'Легкий суп с домашней лапшой и зеленью', image: '/images/lapsha.webp' },
    { name: 'Щи из свежей капусты', price: 80, description: 'Традиционные русские щи с говядиной', image: '/images/shi.webp' },
  ],
  main: [
    { name: 'Кордон-Блю', price: 90, description: 'Филе с ветчиной и сыром внутри', image: '/images/cordonblue.webp' },
    { name: 'Мясные шарики с рисом', price: 155, description: 'В нежном томатном соусе', image: '/images/meatballs.webp' },
    { name: 'Паста Карбонара', price: 145, description: 'С ветчиной в сливочном соусе', image: '/images/carbonara.webp' },
    { name: 'Буженина', price: 110, description: 'Запечённое мясо по-домашнему', image: '/images/buzhenina.webp' },
  ],
  sides: [
    { name: 'Пюре картофельное', price: 55, description: 'Со сливочным маслом', image: '/images/pure.webp' },
    { name: 'Картофель жареный', price: 45, description: 'С ароматными специями', image: '/images/kartofel.webp' },
    { name: 'Рис отварной', price: 50, description: 'Лёгкий классический гарнир', image: '/images/ris.webp' },
    { name: 'Макароны', price: 40, description: 'Классические рожки с маслом', image: '/images/makaroni.webp' },
  ],
  salads: [
    { name: 'Винегрет', price: 65, description: 'Классический салат с ароматным маслом', image: '/images/vinegret.webp' },
    { name: 'Оливье', price: 95, description: 'С вареной колбасой и зеленым горошком', image: '/images/olivie.webp' },
    { name: 'Цезарь с курицей', price: 55, description: 'С нежным соусом и сухариками', image: '/images/cesar.webp' },
    { name: 'Дамский каприз', price: 105, description: 'Курица, ветчина, грибы и сыр', image: '/images/capriz.webp' },
  ],
  pastry: [
    { name: 'Пицца «Ассорти»', price: 35, description: 'С колбасами и сыром', image: '/images/assorti.webp' },
    { name: 'Пицца «Деревенская»', price: 60, description: 'С мясной начинкой', image: '/images/pizzaderevnya.webp' },
    { name: 'Пирожок с картошкой', price: 55, description: 'Румяное тесто и нежная начинка', image: '/images/pirojok.webp' },
    { name: 'Беляш с мясом', price: 85, description: 'Сочная мясная начинка', image: '/images/belyash.webp' },
  ],
  drinks: [
    { name: 'Компот ягодный', price: 35, description: 'Из свежезамороженных ягод', image: '/images/kompotyag.webp' },
    { name: 'Компот из сухофруктов', price: 45, description: 'Домашний освежающий напиток', image: '/images/kompotsuho.webp' },
    { name: 'Чай черный/зеленый', price: 25, description: 'В ассортименте', image: '/images/chai.webp' },
    { name: 'Кофе растворимый', price: 80, description: 'В ассортименте', image: '/images/coffee.webp' },
  ],
};

export const MenuSection: React.FC = () => {
  const [activeCategoryId, setActiveCategoryId] = useState('soups');

  const activeItems = menuData[activeCategoryId] || [];

  return (
    <section id="menu" className="py-20 bg-white scroll-mt-28">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Наше Меню" 
          subtitle="Нажимайте на категории ниже, чтобы ознакомиться с ассортиментом блюд, которые мы приготовили для вас сегодня." 
        />

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
          {categories.map((cat) => (
            <button 
              key={cat.id} 
              onClick={() => setActiveCategoryId(cat.id)}
              className={`flex flex-col items-center justify-center p-5 rounded-2xl border-2 transition-all duration-200 group ${
                activeCategoryId === cat.id 
                ? 'bg-primary-600 border-primary-600 text-white shadow-lg scale-105' 
                : 'bg-secondary-50 border-secondary-100 text-secondary-600 hover:border-primary-200 hover:bg-white hover:shadow-md'
              }`}
            >
              <div className={`mb-3 transition-transform group-hover:scale-110 ${
                activeCategoryId === cat.id ? 'text-white' : 'text-primary-600'
              }`}>
                <cat.icon size={36} strokeWidth={1.5} />
              </div>
              <span className="font-bold text-sm tracking-wide">{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Menu Items Content */}
        <div className="max-w-7xl mx-auto bg-secondary-50 rounded-[2.5rem] p-6 md:p-10 border border-secondary-100 shadow-sm min-h-[400px]">
          <div className="flex items-center gap-3 mb-8 border-b border-secondary-200 pb-6">
            <div className="p-3 bg-white rounded-xl text-primary-600 shadow-sm">
              {React.createElement(categories.find(c => c.id === activeCategoryId)?.icon || Coffee, { size: 32 })}
            </div>
            <h3 className="text-3xl font-serif font-bold text-secondary-900">
              {categories.find(c => c.id === activeCategoryId)?.name}
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {activeItems.map((item, index) => (
              <div 
                key={index} 
                className="bg-white rounded-3xl overflow-hidden border border-secondary-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col animate-in slide-in-from-bottom-4 fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Large Photo Container */}
                <div className="h-48 md:h-56 overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                {/* Details */}
                <div className="p-5 flex flex-col flex-grow">
                  <h4 className="text-xl font-bold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-1">
                    {item.name}
                  </h4>
                  <p className="text-secondary-500 text-sm leading-relaxed mb-4 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};