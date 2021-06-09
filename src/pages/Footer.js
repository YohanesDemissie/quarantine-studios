import React from 'react';
import FBIcon from '../assets/photos/FacebookIconBlack.png';
import IGIcon from '../assets/photos/InstagramIconBlack.png';
import TwitterIcon from '../assets/photos/TwitterIconBlack.png';
import '../styles/footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <a href="https://www.facebook.com/jimjonesmusic" ><img src={FBIcon} className="icons" /></a>
      <a href="https://www.instagram.com/jimjonescapo/?hl=en" ><img src={IGIcon} className="icons-ig" /></a>
      <a href="https://twitter.com/jimjonescapo?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" ><img src ={TwitterIcon} className="icons" /></a>
    </div>
  )
}

export default Footer;