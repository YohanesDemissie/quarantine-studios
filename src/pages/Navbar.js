import React from 'react';
import '../styles/navbar.css'
import Logo from '../assets/photos/qs-logo.png'

const Navbar = () => {
  return (
    <div>
      <nav className="navigation">
        <ul>
          <li className="li-logo"><img className="logo" src={Logo} /><p className="nav-title">Quarantine Studios Inc.</p></li>
          <li className="text">Home</li>
          <li className="text">About</li>
          <li className="text">Testimonies</li>
          <li className="text">Contact</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;