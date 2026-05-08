"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

interface SafeImageProps extends Omit<ImageProps, "onError"> {
  fallbackName?: string;
}

export function SafeImage({ src, alt, fallbackName, className, fill, ...props }: SafeImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className={`flex items-center justify-center bg-gradient-to-br from-soft-sage to-surface-light text-center p-4 ${className} ${fill ? 'absolute inset-0' : 'w-full h-full'}`}>
        <span className="font-serif text-lg text-forest-black drop-shadow-sm">
          {fallbackName || alt}
        </span>
        {/*
          <!-- IMAGE MISSING -->
          <!-- Please place the image at: ${src} -->
        */}
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      fill={fill}
      onError={() => setHasError(true)}
      {...props}
    />
  );
}
