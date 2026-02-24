import React from "react";

type ResponsiveImageProps = {
  name: string;            // например: "obed" (без расширения)
  alt: string;
  className?: string;
  sizes: string;           // например "100vw" или "48px"
  widths: number[];        // те размеры, которые генерим
  fallbackWidth: number;   // какой webp брать как src
  priority?: boolean;      // LCP/above-the-fold
  width?: number;          // чтобы снижать CLS (если известно)
  height?: number;
};

export const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  name,
  alt,
  className,
  sizes,
  widths,
  fallbackWidth,
  priority,
  width,
  height,
}) => {
  const avifSrcSet = widths.map((w) => `/images/${name}-${w}.avif ${w}w`).join(", ");
  const webpSrcSet = widths.map((w) => `/images/${name}-${w}.webp ${w}w`).join(", ");
  const fallbackSrc = `/images/${name}-${fallbackWidth}.webp`;

  return (
    <picture>
      <source type="image/avif" srcSet={avifSrcSet} sizes={sizes} />
      <source type="image/webp" srcSet={webpSrcSet} sizes={sizes} />
      <img
        src={fallbackSrc}
        alt={alt}
        className={className}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        fetchpriority={priority ? "high" : "auto"}
        decoding="async"
      />
    </picture>
  );
};
