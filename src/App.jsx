import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Projects from './components/Projects'
import Contactus from './components/Contactus'
import About from './components/About'
import SkillSection from './components/Skill_section'
import AnimatedStarfield from './animations/AnimatedStarfield'



function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/projects",
      element: <Projects />
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/skill_section",
      element: <SkillSection />
    },
    {
      path: "/contactus",
      element: <Contactus />
    }
  ])

  return (
    <>
      <AnimatedStarfield />
      <RouterProvider router={router} />
    </>
  )
}

export default App
