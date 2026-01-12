import { useEffect } from 'react';

/**
 * ImagePreloader component - aggressively preloads critical images
 * Adds link rel="preload" to head and uses Image object for instant availability
 */

const ImagePreloader = ({ images = [] }) => {
  useEffect(() => {
    // Preload critical images by adding link tags to head
    images.forEach(({ src, as = 'image', type = 'image/png' }) => {
      if (!src) return;
      
      // Check if preload link already exists
      const existingLink = document.querySelector(`link[href="${src}"]`);
      if (existingLink) return;
      
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = as;
      link.href = src;
      if (type) {
        link.type = type;
      }
      link.crossOrigin = 'anonymous';
      document.head.insertBefore(link, document.head.firstChild);
    });

    // Preload images in memory immediately and in parallel
    const imagePromises = images.map(({ src }) => {
      return new Promise((resolve) => {
        if (!src) {
          resolve();
          return;
        }
        
        const img = new Image();
        img.crossOrigin = 'anonymous';
        
        img.onload = () => {
          // Image is cached now, will load instantly from memory
          resolve();
        };
        
        img.onerror = () => {
          // Even if load fails, don't block others
          resolve();
        };
        
        img.src = src;
      });
    });

    // Preload all images in parallel
    Promise.all(imagePromises).catch(() => {
      // Silently handle any errors
    });
  }, [images]);
  return null; // This component doesn't render anything
};

export default ImagePreloader;
