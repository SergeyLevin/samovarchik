import React, { useEffect } from "react";
import { X } from "lucide-react";
import { ResponsiveImage } from "./ResponsiveImage";

interface ComboModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const comboItems = [
  {
    name: "Наваристый суп дня",
    description: "Борщ, щи или солянка на мясном бульоне",
    imageName: "solyanka",
  },
  {
    name: "Горячее с гарниром",
    description: "Котлета, гуляш или рыба с пюре, гречкой или рисом",
    imageName: "meatballs",
  },
  {
    name: "Свежий салат",
    description: "Витаминный, капустный или свекла с чесноком",
    imageName: "cesar",
  },
  {
    name: "Напиток",
    description: "Домашний компот из сухофруктов или ягод",
    imageName: "kompotyag",
  },
];

export const ComboModal: React.FC<ComboModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const cardSizes = "(min-width: 640px) 45vw, 90vw";

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative bg-white rounded-xl overflow-hidden w-full max-w-4xl max-h-[90vh] shadow-2xl animate-in zoom-in-95 duration-200 flex flex-col">
        <div className="p-6 border-b border-secondary-100 flex justify-between items-center bg-secondary-50">
          <div>
            <h2 className="text-2xl font-serif font-bold text-secondary-900">Состав Комбо-Обеда</h2>
            <p className="text-secondary-600 text-sm">Всего за 250₽</p>
          </div>
          <button
            onClick={onClose}
            className="bg-black/10 hover:bg-black/20 text-secondary-900 p-2 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="overflow-y-auto p-6 bg-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {comboItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-col rounded-xl overflow-hidden border border-secondary-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <ResponsiveImage
                    name={item.imageName}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    sizes={cardSizes}
                    widths={[256, 384, 512, 768, 1024]}
                    fallbackWidth={512}
                  />
                </div>

                <div className="p-4 bg-secondary-50 flex-grow">
                  <h3 className="font-bold text-lg text-primary-700 mb-1">{item.name}</h3>
                  <p className="text-secondary-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
