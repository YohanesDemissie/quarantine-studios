import React from 'react';
import FBIcon from '../assets/photos/FacebookIconBlack.png';
import IGIcon from '../assets/photos/InstagramIconBlack.png';
import TwitterIcon from '../assets/photos/TwitterIconBlack.png';
import '../styles/footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="icons-container">
        <a href="https://www.facebook.com/jimjonesmusic" ><img src={FBIcon} className="icons" /></a>
        <a href="https://www.instagram.com/jimjonescapo/?hl=en" ><img src={IGIcon} className="icons-ig" /></a>
        <a href="https://twitter.com/jimjonescapo?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" ><img src ={TwitterIcon} className="icons" /></a>
      </div>
      <div className="footer-text-container">
        <p>Quarantine Studios Inc. | Privacy | &#169; 2021</p>
      </div>
    </div>
  )
}

export default Footer;