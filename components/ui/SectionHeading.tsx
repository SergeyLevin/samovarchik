import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle, 
  centered = true,
  light = false 
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
      <h2 className={`text-3xl md:text-4xl font-serif font-bold mb-4 ${light ? 'text-white' : 'text-secondary-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg md:text-xl max-w-2xl mx-auto ${light ? 'text-secondary-100' : 'text-secondary-600'}`}>
          {subtitle}
        </p>
      )}
      <div className={`h-1 w-24 bg-primary-500 mt-6 rounded-full ${centered ? 'mx-auto' : ''}`} />
    </div>
  );
};