import { useEffect, useRef, useState } from 'react';

/**
 * LazyImage component - lazy loads images when they come into viewport
 * Prevents loading images that user might not see
 */

const LazyImage = ({ 
  src, 
  alt, 
  className = '',
  width = 'auto',
  height = 'auto',
  placeholderColor = '#e0e0e0',
  onLoad
}) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    // Create Intersection Observer for lazy loading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Image is visible, load it
            setImageSrc(src);
            observer.unobserve(entry.target);
          }
        });
      },

      {
        rootMargin: '50px', // Start loading 50px before image comes into view
        threshold: 0.01
      }
      
    );
    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [src]);

  const handleImageLoad = () => {
    setIsLoaded(true);
    if (onLoad) onLoad();
  };


  return (
    <img
      ref={imgRef}
      src={imageSrc}
      alt={alt}
      className={`${className} ${isLoaded ? 'loaded' : 'loading'}`}
      style={{
        width,
        height,
        backgroundColor: !isLoaded ? placeholderColor : 'transparent',
        transition: 'all 0.3s ease-in-out'
      }}
      onLoad={handleImageLoad}
      loading="lazy"
    />
  );
  
};

export default LazyImage;
