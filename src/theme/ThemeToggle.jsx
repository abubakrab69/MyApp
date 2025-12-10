import React from 'react';
import { useTheme } from './ThemeContext';
import styles from './ThemeToggle.module.css';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button 
      className={`${styles.themeToggle} ${isDarkMode ? styles.dark : styles.light}`}
      onClick={toggleTheme}
      aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
    >
      <div className={styles.toggleTrack}>
        <div className={styles.toggleThumb}>
          <div className={styles.iconContainer}>
            {isDarkMode ? (
              // Moon Icon
              <svg 
                className={styles.icon} 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            ) : (
              // Sun Icon
              <svg 
                className={styles.icon} 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            )}
          </div>
        </div>
        
        {/* Background Elements */}
        <div className={styles.stars}>
          {[...Array(6)].map((_, i) => (
            <div 
              key={i} 
              className={styles.star}
              style={{
                left: `${15 + i * 12}%`,
                animationDelay: `${i * 0.2}s`
              }}
            />
          ))}
        </div>
        
        <div className={styles.clouds}>
          {[...Array(3)].map((_, i) => (
            <div 
              key={i} 
              className={styles.cloud}
              style={{
                left: `${20 + i * 20}%`,
                animationDelay: `${i * 0.3}s`
              }}
            />
          ))}
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle;