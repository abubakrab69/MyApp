import React, { createContext, useContext, useState, useEffect } from 'react';
import LogoDark from '../assets/logo_main.png';
import LogoLight from '../assets/logo_main2.png';

const ThemeContext = createContext();

// Theme storage key
const THEME_STORAGE_KEY = 'portfolio-theme-preference';

// Theme utilities
const getStoredTheme = () => {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch (error) {
    console.warn('Error reading theme from localStorage:', error);
    return null;
  }
};

const setStoredTheme = (themeData) => {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, JSON.stringify(themeData));
  } catch (error) {
    console.warn('Error saving theme to localStorage:', error);
  }
};

const getSystemPreference = () => {
  if (typeof window !== 'undefined' && window.matchMedia) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  return true; // Default to dark
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  // Initialize theme on mount
  useEffect(() => {
    const initializeTheme = () => {
      const storedTheme = getStoredTheme();
      
      if (storedTheme && typeof storedTheme.isDarkMode === 'boolean') {
        // Use stored preference
        setIsDarkMode(storedTheme.isDarkMode);
      } else {
        // Use system preference or default to dark
        const systemPrefersDark = getSystemPreference();
        setIsDarkMode(systemPrefersDark);
      }
      
      setIsLoading(false);
    };

    initializeTheme();
  }, []);

  // Apply theme changes
  useEffect(() => {
    if (!isLoading) {
      const themeData = {
        isDarkMode,
        timestamp: Date.now(),
        version: '1.0'
      };

      // Save to localStorage
      setStoredTheme(themeData);

      // Apply to document
      document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
      
      // Update body class for additional styling if needed
      document.body.className = isDarkMode ? 'theme-dark' : 'theme-light';
    }
  }, [isDarkMode, isLoading]);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleSystemThemeChange = (e) => {
      const storedTheme = getStoredTheme();
      // Only auto-update if user hasn't manually set a preference recently (within 24 hours)
      if (!storedTheme || (Date.now() - storedTheme.timestamp > 24 * 60 * 60 * 1000)) {
        setIsDarkMode(e.matches);
      }
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);
    return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
  }, []);

  // Preload critical assets (logos) early so Splash / Navbar render without delay
  useEffect(() => {
    try {
      const logos = [LogoDark, LogoLight];
      logos.forEach((path) => {
        if (!path) return;
        // add preload link if not present
        const existing = document.querySelector(`link[href="${path}"]`);
        if (!existing) {
          const link = document.createElement('link');
          link.rel = 'preload';
          link.as = 'image';
          link.href = path;
          link.crossOrigin = 'anonymous';
          document.head.appendChild(link);
        }

        // create Image object to prime the cache
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.src = path;
      });
    } catch (err) {
      // silent
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  const setTheme = (theme) => {
    setIsDarkMode(theme === 'dark');
  };

  const resetToSystemTheme = () => {
    const systemPrefersDark = getSystemPreference();
    setIsDarkMode(systemPrefersDark);
  };

  const value = {
    isDarkMode,
    isLoading,
    theme: isDarkMode ? 'dark' : 'light',
    toggleTheme,
    setTheme,
    resetToSystemTheme
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};