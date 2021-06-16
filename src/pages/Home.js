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
        <div className="customer-reviews">
          <img className="artist-images" src="https://us.hola.com/images/0268-12191511426b-2d7aa59dc806-1000/horizontal-1200/drake.jpg" alt="Drake" />
          <p className="artist-text">Greatest recording experience in my life</p>
        </div>
        <div className="customer-reviews">
          <img className="artist-images" src="https://thefader-res.cloudinary.com/private_images/w_760,c_limit,f_auto,q_auto:best/unnamed_y9kpvv/lil-baby-sum-2-prove.jpg" alt="Lil Baby" />
          <p className="artist-text">Went double platinum on my last single thanks to Quarantine Studios</p>
        </div>
        <div className="customer-reviews">
          <img className="artist-images" src="https://www.carbonmagazine.co.uk/wp-content/uploads/2020/03/roddy.jpg" alt="Roddy Rich" />
          <p className="artist-text">Lost all my beats weeks before album drop, thanks to quarantine studios cloud support, they hadd all my files backed up and easily recover allowing me to finish my album and hit billboards top 100! </p>
        </div>
        <div className="customer-reviews">
          <img className="artist-images" src="https://static.billboard.com/files/2021/04/Morray-2021-Press-cr-Nick-Farrar-billboard-1548-1619459116-compressed.jpg" alt="Morray" />
          <p className="artist-text">My breakout song "Quicksand" was recorded, mastered, and brought to the top of charts thanks to Quarantine studios fine engineers, producers, and reliable services. They will not let you down!</p>
        </div>
        <div className="customer-reviews">
          <img className="artist-images" src="https://media.gq.com/photos/58a1ab034a441ac67f7645ab/3:4/w_2250,h_3000,c_limit/Grammy_GQ_Portraits-migos-pari.jpeg" alt="Migos" />
          <p className="artist-text">All these producers and engineers moving slow, causing a delay in our latest album drop. Thanks to the folks at Quarantine Studios, we were able to get drop "Kulture 3" without further delay and bring the people Quality Control Music.</p>
        </div>
        <div className="customer-reviews">
          <img className="artist-images" src="https://media.pitchfork.com/photos/5c7d4c1b4101df3df85c41e5/1:1/w_600/Dababy_BabyOnBaby.jpg" alt="Da Baby" />
          <p className="artist-text">This the best way to keep the grind going during the pandemic for all us artist. Couldn't find anywhere for a safe place to record, upload, and finalize music until I found Quarantine Studios. </p>
        </div>
      <Contact />
      <Footer />
      </div>
    </div>
  )
}

export default Home;