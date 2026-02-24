import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { Sprout, Heart, Wallet, Quote } from 'lucide-react';

const benefits = [
  {
    title: 'Натуральные продукты',
    description: 'Мы закупаем мясо, молоко и овощи у проверенных фермерских хозяйств Свердловской области. Никакой химии и заморозки.',
    icon: Sprout
  },
  {
    title: 'Готовим с любовью',
    description: 'Наши повара знают секреты настоящей домашней кухни. Каждое блюдо готовится вручную, как для собственной семьи.',
    icon: Heart
  },
  {
    title: 'Честные цены',
    description: 'Мы верим, что вкусная и качественная еда должна быть доступна каждому. Держим цены низкими без ущерба качеству.',
    icon: Wallet
  }
];

export const Features: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white scroll-mt-28">
      <div className="container mx-auto px-4">
        <SectionHeading title="Почему выбирают нас?" />

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 rounded-2xl bg-secondary-50 hover:bg-red-50 transition-colors duration-300">
              <div className="bg-white p-4 rounded-full shadow-sm text-primary-600 mb-6">
                <benefit.icon size={40} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-3">{benefit.title}</h3>
              <p className="text-secondary-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quote Block */}
        <div className="max-w-4xl mx-auto bg-primary-600 rounded-3xl p-8 md:p-12 relative overflow-hidden text-center">
          <Quote className="absolute top-4 left-4 text-primary-500 w-16 h-16 opacity-50" />
          <Quote className="absolute bottom-4 right-4 text-primary-500 w-16 h-16 opacity-50 rotate-180" />
          
          <p className="relative z-10 text-white text-lg md:text-2xl font-serif italic leading-relaxed mb-6">
            "Мы хотим воссоздать ту самую атмосферу воскресного обеда у бабушки, 
            когда стол ломится от угощений, витает аромат свежей выпечки, 
            а душа наполняется теплом и уютом."
          </p>
          <div className="relative z-10 text-red-100 font-semibold uppercase tracking-widest text-sm">
            Коллектив сети «Самоварчик»
          </div>
        </div>
      </div>
    </section>
  );
};