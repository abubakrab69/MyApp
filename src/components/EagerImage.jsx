import { useState, useEffect } from 'react';

/**
 * EagerImage component - loads images immediately without delay
 * Perfect for hero/critical images that must load fast
 * Includes blur-up placeholder effect
 */
const EagerImage = ({ 
  src, 
  alt, 
  className = '',
  width = 'auto',
  height = 'auto',
  placeholderColor = '#e0e0e0',
  onLoad
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Preload image in memory
    const img = new Image();
    img.onload = () => {
      setIsLoaded(true);
      if (onLoad) onLoad();
    };
    img.src = src;
  }, [src, onLoad]);

  return (
    <img
      src={src}
      alt={alt}
      className={`${className} ${isLoaded ? 'loaded' : 'loading'}`}
      style={{
        width,
        height,
        backgroundColor: !isLoaded ? placeholderColor : 'transparent',
        transition: 'background-color 0.3s ease-in-out',
        objectFit: 'contain'
      }}
      loading="eager"
      decoding="async"
    />
  );
};

export default EagerImage;
