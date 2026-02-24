import React from "react";
import { Button } from "./ui/Button";
import { Truck } from "lucide-react";
import { ResponsiveImage } from "./ResponsiveImage";

export const Delivery: React.FC = () => {
  return (
    <section id="delivery" className="py-24 relative overflow-hidden scroll-mt-28">
      <div className="absolute inset-0 z-0">
        <ResponsiveImage
          name="dostavka"
          alt="Доставка еды"
          className="w-full h-full object-cover"
          sizes="100vw"
          widths={[640, 960, 1280, 1536]}
          fallbackWidth={1536}
          width={1536}
          height={1024}
        />
        <div className="absolute inset-0 bg-secondary-900/80" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <Truck className="w-16 h-16 text-primary-500 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Еда с доставкой до двери!</h2>
          <p className="text-lg md:text-xl text-secondary-200 mb-10 leading-relaxed">
            Нет времени готовить или идти в столовую? Мы привезем горячий домашний обед прямо к вам в офис или домой.
            Быстро, аккуратно и все еще горячо!
          </p>
          <Button
            size="lg"
            className="bg-primary-600 hover:bg-primary-700 text-white transform hover:scale-105 transition-all text-xl px-12 py-4 shadow-lg shadow-primary-900/50"
            onClick={() => window.open("https://t.me/samovarchik_bot", "_blank")}
          >
            Заказать доставку
          </Button>
        </div>
      </div>
    </section>
  );
};
