import React, { useState, useEffect } from 'react';
import { BsList } from "react-icons/bs";
import logo from '../components/img/logonobg.png';
import { NavLink, Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function handleResize() {
      // Close the menu when the screen size changes
      setMenuOpen(false);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <>
      <Toaster />
      <div id="navbar_2" className="navbar_2">
        <div className='logo'><img src={logo} alt="" /></div>
        <ul className='links'>
          <li><NavLink to="/" className="active"> Home</NavLink></li>
          <li><NavLink to="/about">
          About Us</NavLink></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#features">Features</a></li>
          <li className="nav-item">
                <NavLink to="/dashboard/admin/product_dummy" className="nav-link">
                  Projects
                </NavLink>
              </li>
          <li><a href="#testimonials">Blogs</a></li>
          <li><a href="#articles">Articles</a></li>
          <li><NavLink to="/contact">
          Contact</NavLink></li>
        </ul>
        <div className="toggle_btn" onClick={toggleMenu}><BsList/></div>
      </div>

      <div className={`dropdown_menu ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#" className="active">Home</a></li>
          <li><a href="#constructions">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#features">Features</a></li>
          <li className="nav-item">
                <NavLink to="/dashboard/admin/product_dummy" className="nav-link" style={{color:"#fff"}}>
                  Projects
                </NavLink>
              </li>
              <li><a href="#testimonials">Blogs</a></li>
              <li><a href="#articles">Articles</a></li>
          <li><NavLink to="/contact">
          Contact</NavLink></li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
