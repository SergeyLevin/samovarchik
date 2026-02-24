import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, UtensilsCrossed } from 'lucide-react';
import { Button } from './ui/Button';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Меню', href: '#menu' },
    { name: 'Акции', href: '#promotions' },
    { name: 'О нас', href: '#about' },
    { name: 'Адреса', href: '#locations' },
    { name: 'Доставка', href: '#delivery' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-white/90 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo & Slogan */}
          <div className="flex flex-col">
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="flex items-center gap-2 group"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden shadow-sm group-hover:shadow-md transition-all border-2 border-primary-100">
                <img 
                  src="/images/logo.webp" 
                  alt="Самоварчик" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-2xl md:text-3xl font-serif font-bold text-primary-700 tracking-tight">
                САМОВАРЧИК
              </span>
            </a>
            <span className="text-xs md:text-sm text-secondary-500 font-medium ml-12 -mt-1 hidden sm:block">
              Вкусно, как у бабушки!
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-secondary-700 hover:text-primary-600 font-semibold transition-colors text-base cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Clickable Phone Number (Desktop) */}
          <div className="hidden lg:block">
            <a 
              href="tel:+79126107078"
              className="inline-flex items-center gap-2 bg-primary-600 text-white px-5 py-2.5 rounded-full font-bold shadow-sm hover:bg-primary-700 transition-colors"
            >
              <Phone size={18} />
              +7 (912) 610-70-78
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-secondary-800 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg lg:hidden p-4 flex flex-col gap-4 border-t border-secondary-100">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-lg font-semibold text-secondary-800 py-2 border-b border-secondary-100 last:border-0 cursor-pointer"
              onClick={(e) => handleLinkClick(e, link.href)}
            >
              {link.name}
            </a>
          ))}
          {/* Clickable Phone in Mobile Menu */}
          <a 
            href="tel:+79126107078"
            className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-full font-bold w-full mt-2 hover:bg-primary-700 transition-colors"
          >
            <Phone size={18} />
            +7 (912) 610-70-78
          </a>
        </div>
      )}
    </header>
  );
};