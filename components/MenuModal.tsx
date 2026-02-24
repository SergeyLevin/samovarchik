import React, { useEffect } from "react";
import { X } from "lucide-react";
import { ResponsiveImage } from "./ResponsiveImage";

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MenuModal: React.FC<MenuModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative bg-white rounded-xl overflow-hidden w-full md:max-w-[90vw] max-w-md max-h-[90vh] shadow-2xl animate-in zoom-in-95 duration-200 flex flex-col">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
        >
          <X size={24} />
        </button>

        <div className="overflow-y-auto overflow-x-hidden h-full bg-stone-100 flex justify-center">
          <div className="w-full flex justify-center bg-white min-h-full">
            <ResponsiveImage
              name="obed"
              alt="Меню столовой Самоварчик"
              className="w-full h-auto object-contain md:object-cover self-start"
              sizes="(min-width: 768px) 90vw, 100vw"
              widths={[640, 960, 1280, 1536]}
              fallbackWidth={1536}
              // Модалка открывается по действию — priority не нужно
              width={1536}
              height={1024}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
