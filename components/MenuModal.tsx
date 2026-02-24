import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MenuModal: React.FC<MenuModalProps> = ({ isOpen, onClose }) => {
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
      
      {/* 
         Modal Container 
         - Mobile: max-w-md for vertical layout
         - Desktop: max-w-[90vw] (almost full screen width) for horizontal layout
      */}
      <div className="relative bg-white rounded-xl overflow-hidden w-full md:max-w-[90vw] max-w-md max-h-[90vh] shadow-2xl animate-in zoom-in-95 duration-200 flex flex-col">
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
        >
          <X size={24} />
        </button>

        {/* Scrollable content area */}
        <div className="overflow-y-auto overflow-x-hidden h-full bg-stone-100 flex justify-center">
          <picture className="w-full flex justify-center bg-white min-h-full">
            {/* 
                DESKTOP IMAGE (Horizontal) 
                Replace srcset with the URL of your horizontal menu image.
                Shown on screens wider than 768px.
            */}
            <source 
              media="(min-width: 768px)" 
              srcSet="/images/obed.webp" 
            />
            
            {/* 
                MOBILE IMAGE (Vertical) 
                Replace src with the URL of your vertical menu image.
                Shown on screens smaller than 768px.
            */}
            <img 
              src="/images/obed.webp" 
              alt="Меню столовой Самоварчик" 
              className="w-full h-auto object-contain md:object-cover self-start"
            />
          </picture>
        </div>
      </div>
    </div>
  );
};