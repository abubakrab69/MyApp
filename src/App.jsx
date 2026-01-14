import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import Contactus from './components/Contactus';
import About from './components/About';
import SplashScreen from "./splash/Splash.jsx";
import AnimatedStarfield from './animations/AnimatedStarfield';
import Uses from "./components/Uses.jsx";
import THSProjectDetail from './components/ths_project_detail';
import HMPProjectDetail from './components/hmp_project_detail';
import { ThemeProvider, useTheme } from './theme/ThemeContext';
import './theme/globalTheme.css';

// Main App Content Component
const AppContent = () => {
  const { isDarkMode } = useTheme();
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    let mounted = true;

    const wait = (ms) => new Promise((res) => setTimeout(res, ms));
    const loadImage = (src) => new Promise((res) => {
      if (!src) return res();
      const img = new Image();
      img.onload = () => res();
      img.onerror = () => res(); // resolve on error so splash doesn't hang
      img.src = src;
    });

    // Dynamically import hero image so bundler resolves the path
    import('./assets/Mypic.png')
      .then((module) => module.default || module)
      .then((heroSrc) => Promise.all([wait(1200), loadImage(heroSrc)]))
      .then(() => {
        if (mounted) setLoading(false);
      })
      .catch(() => {
        if (mounted) setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, []);

  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/projects", element: <Projects /> },
    { path: "/ths_project_detail", element: <THSProjectDetail /> },
    { path: "/hmp_project_detail", element: <HMPProjectDetail /> },
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
