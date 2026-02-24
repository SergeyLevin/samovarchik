import React, { useState } from "react";
import { SectionHeading } from "./ui/SectionHeading";
import { Coffee, Soup, Beef, Salad, Croissant, Milk, Wheat } from "lucide-react";
import { ResponsiveImage } from "./ResponsiveImage";

const categories = [
  { id: "soups", name: "Супы", icon: Soup },
  { id: "main", name: "Горячее", icon: Beef },
  { id: "sides", name: "Гарниры", icon: Wheat },
  { id: "salads", name: "Салаты", icon: Salad },
  { id: "pastry", name: "Выпечка", icon: Croissant },
  { id: "drinks", name: "Напитки", icon: Milk },
];

type MenuItem = {
  name: string;
  price: number;
  description: string;
  imageName: string; // имя файла БЕЗ расширения, например "borsh"
};

const menuData: Record<string, MenuItem[]> = {
  soups: [
    { name: "Борщ", price: 95, description: "На наваристом говяжьем бульоне", imageName: "borsh" },
    { name: "Солянка мясная", price: 135, description: "Сборная мясная солянка", imageName: "solyanka" },
    { name: "Суп куриный с лапшой", price: 85, description: "Легкий суп с домашней лапшой и зеленью", imageName: "lapsha" },
    { name: "Щи из свежей капусты", price: 80, description: "Традиционные русские щи с говядиной", imageName: "shi" },
  ],
  main: [
    { name: "Кордон-Блю", price: 90, description: "Филе с ветчиной и сыром внутри", imageName: "cordonblue" },
    { name: "Мясные шарики с рисом", price: 155, description: "В нежном томатном соусе", imageName: "meatballs" },
    { name: "Паста Карбонара", price: 145, description: "С ветчиной в сливочном соусе", imageName: "carbonara" },
    { name: "Буженина", price: 110, description: "Запечённое мясо по-домашнему", imageName: "buzhenina" },
  ],
  sides: [
    { name: "Пюре картофельное", price: 55, description: "Со сливочным маслом", imageName: "pure" },
    { name: "Картофель жареный", price: 45, description: "С ароматными специями", imageName: "kartofel" },
    { name: "Рис отварной", price: 50, description: "Лёгкий классический гарнир", imageName: "ris" },
    { name: "Макароны", price: 40, description: "Классические рожки с маслом", imageName: "makaroni" },
  ],
  salads: [
    { name: "Винегрет", price: 65, description: "Классический салат с ароматным маслом", imageName: "vinegret" },
    { name: "Оливье", price: 95, description: "С вареной колбасой и зеленым горошком", imageName: "olivie" },
    { name: "Цезарь с курицей", price: 55, description: "С нежным соусом и сухариками", imageName: "cesar" },
    { name: "Дамский каприз", price: 105, description: "Курица, ветчина, грибы и сыр", imageName: "capriz" },
  ],
  pastry: [
    { name: "Пицца «Ассорти»", price: 35, description: "С колбасами и сыром", imageName: "assorti" },
    { name: "Пицца «Деревенская»", price: 60, description: "С мясной начинкой", imageName: "pizzaderevnya" },
    { name: "Пирожок с картошкой", price: 55, description: "Румяное тесто и нежная начинка", imageName: "pirojok" },
    { name: "Беляш с мясом", price: 85, description: "Сочная мясная начинка", imageName: "belyash" },
  ],
  drinks: [
    { name: "Компот ягодный", price: 35, description: "Из свежезамороженных ягод", imageName: "kompotyag" },
    { name: "Компот из сухофруктов", price: 45, description: "Домашний освежающий напиток", imageName: "kompotsuho" },
    { name: "Чай черный/зеленый", price: 25, description: "В ассортименте", imageName: "chai" },
    { name: "Кофе растворимый", price: 80, description: "В ассортименте", imageName: "coffee" },
  ],
};

export const MenuSection: React.FC = () => {
  const [activeCategoryId, setActiveCategoryId] = useState("soups");
  const activeItems = menuData[activeCategoryId] || [];

  // sizes для карточек:
  // lg: 4 колонки -> ~25vw, sm: 2 колонки -> ~50vw, mobile: почти вся ширина
  const cardSizes = "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 90vw";

  return (
    <section id="menu" className="py-20 bg-white scroll-mt-28">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Наше Меню"
          subtitle="Нажимайте на категории ниже, чтобы ознакомиться с ассортиментом блюд, которые мы приготовили для вас сегодня."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategoryId(cat.id)}
              className={`flex flex-col items-center justify-center p-5 rounded-2xl border-2 transition-all duration-200 group ${
                activeCategoryId === cat.id
                  ? "bg-primary-600 border-primary-600 text-white shadow-lg scale-105"
                  : "bg-secondary-50 border-secondary-100 text-secondary-600 hover:border-primary-200 hover:bg-white hover:shadow-md"
              }`}
            >
              <div
                className={`mb-3 transition-transform group-hover:scale-110 ${
                  activeCategoryId === cat.id ? "text-white" : "text-primary-600"
                }`}
              >
                <cat.icon size={36} strokeWidth={1.5} />
              </div>
              <span className="font-bold text-sm tracking-wide">{cat.name}</span>
            </button>
          ))}
        </div>

        <div className="max-w-7xl mx-auto bg-secondary-50 rounded-[2.5rem] p-6 md:p-10 border border-secondary-100 shadow-sm min-h-[400px]">
          <div className="flex items-center gap-3 mb-8 border-b border-secondary-200 pb-6">
            <div className="p-3 bg-white rounded-xl text-primary-600 shadow-sm">
              {React.createElement(categories.find((c) => c.id === activeCategoryId)?.icon || Coffee, { size: 32 })}
            </div>
            <h3 className="text-3xl font-serif font-bold text-secondary-900">
              {categories.find((c) => c.id === activeCategoryId)?.name}
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {activeItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden border border-secondary-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col animate-in slide-in-from-bottom-4 fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* фиксируем размер области — убираем CLS */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <ResponsiveImage
                    name={item.imageName}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes={cardSizes}
                    widths={[256, 384, 512, 768, 1024]}
                    fallbackWidth={512}
                  />
                </div>

                <div className="p-5 flex flex-col flex-grow">
                  <h4 className="text-xl font-bold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-1">
                    {item.name}
                  </h4>
                  <p className="text-secondary-500 text-sm leading-relaxed mb-4 line-clamp-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
