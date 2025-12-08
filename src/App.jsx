import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './components/Home';
import Projects from './components/Projects';
import Contactus from './components/Contactus';
import About from './components/About';
// import SkillSection from './components/Skill_section';
import SplashScreen from "./splash/Splash.jsx";
import AnimatedStarfield from './animations/AnimatedStarfield';
import Uses from "./components/Uses.jsx";

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
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
    <div style={{ position: "relative" }}>
      {/* BACKGROUND STARS (behind everything) */}
      <div style={{ position: "fixed", inset: 0, zIndex: 0 }}>
        <AnimatedStarfield />
      </div>

      {/* MAIN CONTENT (above stars) */}
      <div style={{ position: "relative", zIndex: 10 }}>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
