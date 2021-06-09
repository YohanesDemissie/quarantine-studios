import reactDom from "react-dom";
import React from 'react';
import '../styles/welcome.css'

const Welcome = () => {
  return(
    <div className="welcome-container">
      <h1 className="welcome-title">Quarantine Studios</h1>
      <div className="welcome-button-container" >
        <a href="/home" className="link">
          <p className="first-line">think it</p>
          {/* <br /> */}
          <p className="second-line">write it</p>
          {/* <br /> */}
          <p className="third-line">create it</p>
          {/* <br /> */}
          <p className="fourth-line">MAKE HISTORY</p>
        </a>
      </div>
    </div>
  )
}

export default Welcome;