import React from 'react';
import useMediaQuery from 'use-mediaquery';
import menu from '../assets/photos/hamburger-menu.png'
import '../styles/navbar.css'
import Logo from '../assets/photos/qs-logo.png'

const Navbar = ({ match }) => {
  return (
    <div>
      {match ? (
        <>
        <div className="mobile-menu-container">
          <img src={menu} className="menu-button" />
        <div class="mobile-title-logo-container">
          {/* <p className="nav-title-mobile">Quarantine Studios Inc.</p> */}
          <img className="search-icon" src="https://icon-library.com/images/white-search-icon-transparent-background/white-search-icon-transparent-background-1.jpg" />
          {/* <img className="logo-mobile" src={Logo} /> */}
        </div>
        <div className="nav-title-mobile">Quarantine Studios Inc.<hr className="title-breakline"/></div>
        
        </div>
        </>
    ) : (
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
    )}
    </div>
  )
}

// import useMediaQuery from "use-mediaquery";
 
// const Component = () => {
//   const matches = useMediaQuery("(min-width: 40em)");
 
//   <p>
//     Matches? <strong>{matches.toString()}</strong>
//   </p>;
// };

export default Navbar;