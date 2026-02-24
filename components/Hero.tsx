import React from "react";
import { Button } from "./ui/Button";
import { MapPin, Utensils } from "lucide-react";
import { ResponsiveImage } from "./ResponsiveImage";

interface HeroProps {
  onOpenMenu: () => void;
  onOpenLocations: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenMenu, onOpenLocations }) => {
  return (
    <section className="pt-[var(--header-h)] relative h-screen min-h-[600px] flex items-center justify-center bg-secondary-900 overflow-hidden pt-24 sm:pt-28 lg:pt-32">
      <div className="absolute inset-0 z-0">
        <ResponsiveImage
          name="obed"
          alt="Традиционный русский обед: борщ со сметаной, котлета с пюре и ягодный компот"
          className="w-full h-full object-cover opacity-70 scale-105"
          sizes="100vw"
          widths={[640, 960, 1280, 1536]}
          fallbackWidth={1536}
          priority
          width={1536}
          height={1024}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/70" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="inline-block mb-6 bg-primary-600/30 backdrop-blur-md border border-primary-500/40 px-6 py-2 rounded-full shadow-lg">
          <span className="text-primary-50 font-bold tracking-widest uppercase text-xs md:text-sm">
            Столовая семейных традиций в Екатеринбурге
          </span>
        </div>

        <h1 className="text-[clamp(2.6rem,10vw,6rem)] md:text-[clamp(4.5rem,7vw,9rem)] font-serif font-extrabold text-white mb-4 tracking-tight leading-[0.9] break-words drop-shadow-2xl">
          САМОВАРЧИК
        </h1>

        <p className="text-2xl md:text-4xl text-primary-300 font-serif italic mb-8 drop-shadow-xl">
          Вкусно, как у бабушки!
        </p>

        <p className="text-lg md:text-2xl text-white max-w-3xl mx-auto mb-10 leading-relaxed font-light drop-shadow-md">
          Почувствуйте вкус настоящего домашнего уюта. Готовим из свежих продуктов по рецептам, которые передаются из поколения в поколение.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="w-full sm:w-auto gap-3 text-xl px-12 py-6 rounded-2xl transition-transform hover:scale-105"
            onClick={onOpenMenu}
          >
            <Utensils size={28} />
            Смотреть меню
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto gap-3 text-xl px-12 py-6 rounded-2xl border-white/50 hover:border-white backdrop-blur-sm transition-transform hover:scale-105"
            onClick={onOpenLocations}
          >
            <MapPin size={28} />
            Наши адреса
          </Button>
          </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/60">
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};



