import React from "react";
import { MapPin, Phone } from "lucide-react";
import { ResponsiveImage } from "./ResponsiveImage";

export const Footer: React.FC = () => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-secondary-900 text-secondary-400 py-12 border-t border-secondary-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-4 text-white">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-secondary-700 bg-white flex items-center justify-center">
                <ResponsiveImage
                  name="logo"
                  alt="Самоварчик"
                  className="w-full h-full object-contain"
                  sizes="40px"
                  widths={[256, 384, 512]}
                  fallbackWidth={256}
                />
              </div>
              <span className="text-xl font-serif font-bold tracking-tight">САМОВАРЧИК</span>
            </div>

            <p className="text-sm italic mb-4">Столовая семейных традиций</p>
            <p className="text-sm leading-relaxed mb-6">
              Место, где каждый может насладиться вкусной домашней едой в уютной обстановке, как в детстве.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Навигация</h4>
            <ul className="space-y-2">
              <li>
                <a href="#menu" onClick={(e) => handleLinkClick(e, "#menu")} className="hover:text-primary-500 transition-colors cursor-pointer">
                  Меню
                </a>
              </li>
              <li>
                <a href="#promotions" onClick={(e) => handleLinkClick(e, "#promotions")} className="hover:text-primary-500 transition-colors cursor-pointer">
                  Акции
                </a>
              </li>
              <li>
                <a href="#locations" onClick={(e) => handleLinkClick(e, "#locations")} className="hover:text-primary-500 transition-colors cursor-pointer">
                  Адреса
                </a>
              </li>
              <li>
                <a href="#delivery" onClick={(e) => handleLinkClick(e, "#delivery")} className="hover:text-primary-500 transition-colors cursor-pointer">
                  Доставка
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Контакты</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-primary-500 mt-0.5 shrink-0" />
                <span>Екатеринбург, ул. Металлургов, 70 / ул. Громова, 145</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-primary-500 shrink-0" />
                <a href="tel:+79126107078" className="hover:text-white transition-colors">
                  +7 (912) 610-70-78
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-secondary-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div>&copy; {new Date().getFullYear()} Столовая «Самоварчик». Все права защищены.</div>
          <div className="flex gap-6" />
        </div>
      </div>
    </footer>
  );
};
