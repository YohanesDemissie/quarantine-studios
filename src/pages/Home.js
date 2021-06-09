import React from 'react';
import Navbar from './Navbar';
import Contact from './Contact';
import '../styles/home.css'
import Footer from './Footer';

const Home = () => {
  return(
    <div>
      <Navbar />
      <div className="home-container">
        {/* <h1>Home</h1> */}
      <Contact />
      <Footer />
      </div>
    </div>
  )
}

export default Home;