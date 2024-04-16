import React from 'react'
import Navbar from '../components/Navbar'
import { BsList } from "react-icons/bs";

function Header() {
  return (
    <header id="header" className="header d-flex align-items-center">
    <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <Navbar/>
    </div>
  </header>
  )
}

export default Header