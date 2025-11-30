import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import { color } from 'framer-motion'
import Logo from './../assets/Logo_main.png'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar1">
        {/* <img 
          src={Logo} 
          alt="MY_Logo" 
          loading="lazy" 
          className="logo_top" 
        /> */}
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
              Projects
            </NavLink>
          </li>
          <li className='link'>
            <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
              About
            </NavLink>
          </li>
          <li className='link'>
            <NavLink to="/skill_section" end className={({ isActive }) => isActive ? "active" : ""}>
              Skills
            </NavLink>
          </li>
        </ul>
        </div>
        <NavLink to="/contactus"><button className="btn_sign_in">
          Let's Contact
        </button></NavLink>
      </nav>
    </div>
  )
}

export default Navbar
