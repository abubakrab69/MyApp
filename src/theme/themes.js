// Theme configuration object
export const themes = {
  dark: {
    // Background colors
    primary: '#0f0f23',
    secondary: '#1a1a2e',
    tertiary: '#16213e',
    
    // Text colors
    textPrimary: '#ffffff',
    textSecondary: 'rgba(255, 255, 255, 0.7)',
    textTertiary: 'rgba(255, 255, 255, 0.5)',
    
    // Accent colors
    accent: '#667eea',
    accentSecondary: '#764ba2',
    accentTertiary: '#f093fb',
    
    // Card/Surface colors
    cardBackground: 'rgba(255, 255, 255, 0.03)',
    cardBorder: 'rgba(255, 255, 255, 0.1)',
    cardHover: 'rgba(255, 255, 255, 0.05)',
    
    // Gradients
    gradientPrimary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    gradientSecondary: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
    gradientBackground: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)',
    
    // Shadows
    shadowPrimary: '0 8px 32px rgba(0, 0, 0, 0.2)',
    shadowSecondary: '0 20px 60px rgba(102, 126, 234, 0.3)',
    shadowGlow: '0 0 40px rgba(102, 126, 234, 0.5)',
  },
  
  light: {
    // Background colors
    primary: '#ffffff',
    secondary: '#f8fafc',
    tertiary: '#f1f5f9',
    
    // Text colors
    textPrimary: '#1e293b',
    textSecondary: '#475569',
    textTertiary: '#64748b',
    
    // Accent colors
    accent: '#667eea',
    accentSecondary: '#764ba2',
    accentTertiary: '#f093fb',
    
    // Card/Surface colors
    cardBackground: 'rgba(255, 255, 255, 0.8)',
    cardBorder: 'rgba(0, 0, 0, 0.1)',
    cardHover: 'rgba(0, 0, 0, 0.02)',
    
    // Gradients
    gradientPrimary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    gradientSecondary: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
    gradientBackground: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #f1f5f9 100%)',
    
    // Shadows
    shadowPrimary: '0 8px 32px rgba(0, 0, 0, 0.1)',
    shadowSecondary: '0 20px 60px rgba(102, 126, 234, 0.2)',
    shadowGlow: '0 0 40px rgba(102, 126, 234, 0.3)',
  }
};

// CSS Custom Properties Generator
export const generateCSSVariables = (theme) => {
  const themeData = themes[theme];
  let cssVariables = ':root {\n';
  
  Object.entries(themeData).forEach(([key, value]) => {
    cssVariables += `  --${key.replace(/([A-Z])/g, '-$1').toLowerCase()}: ${value};\n`;
  });
  
  cssVariables += '}\n';
  return cssVariables;
};