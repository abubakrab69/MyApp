import { useEffect } from 'react';

/**
 * ImagePreloader component - preloads critical images in the head
 * to prevent layout shift and ensure images are ready on page load
 */

const ImagePreloader = ({ images = [] }) => {
  useEffect(() => {
    // Preload critical images by adding link tags to head
    images.forEach(({ src, as = 'image', type = 'image/png' }) => {
      if (!src) return;
      
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = as;
      link.href = src;
      if (type) {
        link.type = type;
      }
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });

    // Alternative: use Image object for preloading without adding to DOM
    images.forEach(({ src }) => {
      if (src) {
        const img = new Image();
        img.src = src;
      }
    });
  }, [images]);

  return null; // This component doesn't render anything
};

export default ImagePreloader;
