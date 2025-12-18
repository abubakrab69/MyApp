import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import Logo from './../assets/logo_main.png'
import ThemeToggle from '../theme/ThemeToggle'


const Navbar = () => {
  return (
    <div>
      <nav className="navbar1">
        <h1 className="logoABNav">
          <img src={Logo} alt="" width={70} height={70}/>
        </h1>
        <div className='nav_inner_box'>
          <ul className='nav_links'>
          <li className='link'>
            <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
              Home
            </NavLink>
          </li>
          <li className='link'>
            <NavLink to="/projects" end className={({ isActive }) => isActive ? "active" : ""}>
              Work
            </NavLink>
          </li>
          <li className='link'>
            <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
              About
            </NavLink>
          </li>
          <li className='link'>
            <NavLink to="/Uses" end className={({ isActive }) => isActive ? "active" : ""}>
              Uses
            </NavLink>
          </li>
        </ul>
        </div>
        <div className="navbar_actions">
          <ThemeToggle />
          <NavLink to="/contactus">
            <button className="btn_sign_in">
              Let's Contact
            </button>
          </NavLink>
        </div>
      </nav>
    </div>
  )
}


export default Navbar
