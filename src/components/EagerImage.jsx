import { useState, useEffect, useRef } from 'react';

/**
 * EagerImage component - loads images immediately without delay
 * Reserves layout by using an aspect-ratio placeholder to avoid CLS
 * Smooth fade-in once loaded
 */
const EagerImage = ({ 
  src, 
  alt, 
  className = '',
  width = '100%',
  height = 'auto',
  placeholderColor = '#e0e0e0',
  onLoad
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [ratio, setRatio] = useState(null);
  const imgRef = useRef(null);

  useEffect(() => {
    // Preload image in memory and get natural aspect ratio
    const img = new Image();
    img.onload = () => {
      setIsLoaded(true);
      if (img.naturalWidth && img.naturalHeight) {
        setRatio(img.naturalHeight / img.naturalWidth);
      }
      if (onLoad) onLoad();
    };
    img.onerror = () => {
      // keep going even on failure
      setIsLoaded(true);
      if (onLoad) onLoad();
    };
    img.src = src;
  }, [src, onLoad]);

  const wrapperStyle = {
    width: width || '100%',
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: !isLoaded ? placeholderColor : 'transparent',
    transition: 'background-color 0.25s ease-in-out'
  };

  if (ratio) {
    wrapperStyle.paddingTop = `${ratio * 100}%`;
    wrapperStyle.height = 0;
  } else if (height !== 'auto' && typeof height === 'string' && height.endsWith('px')) {
    // if user provided exact pixel height, respect it
    wrapperStyle.height = height;
  }

  const imgStyle = {
    position: ratio ? 'absolute' : 'static',
    inset: 0,
    width: '100%',
    height: ratio ? '100%' : height,
    objectFit: 'contain',
    opacity: isLoaded ? 1 : 0,
    transition: 'opacity 0.35s ease-in-out'
  };

  return (
    <div style={wrapperStyle} className={className + ' eager-image-wrapper'}>
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        style={imgStyle}
        loading="eager"
        decoding="async"
        aria-hidden={isLoaded ? 'false' : 'true'}
      />
    </div>
  );
};

export default EagerImage; 
