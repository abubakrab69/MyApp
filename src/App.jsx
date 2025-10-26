import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Projects from './components/Projects'
import Contact from './components/Contact'
import About from './components/About'
import Contactus from './components/Contactus'



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
      path: "/contact",
      element: <Contact />
    },
    {
      path: "/contactus",
      element: <Contactus />
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
