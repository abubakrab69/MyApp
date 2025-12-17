import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import Contactus from './components/Contactus';
import About from './components/About';
import SplashScreen from "./splash/Splash.jsx";
import AnimatedStarfield from './animations/AnimatedStarfield';
import Uses from "./components/Uses.jsx";
import { ThemeProvider, useTheme } from './theme/ThemeContext';
import './theme/globalTheme.css';

// Main App Content Component
const AppContent = () => {
  const { isDarkMode } = useTheme();
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/projects", element: <Projects /> },
    { path: "/about", element: <About /> },
    { path: "/Uses", element: <Uses /> },
    { path: "/Contactus", element: <Contactus /> }
  ]);
  

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <div style={{ 
      position: "relative",
      minHeight: "100vh",
      background: isDarkMode ? 'transparent' : '#ffffff'
    }}>
      {/* BACKGROUND STARS (only in dark mode) */}
      {isDarkMode && (
        <div style={{ position: "fixed", inset: 0, zIndex: 0 }}>
          <AnimatedStarfield />
        </div>
      )}

      {/* MAIN CONTENT */}
      <div style={{ position: "relative", zIndex: 10 }}>
        <RouterProvider router={router} />
      </div>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
