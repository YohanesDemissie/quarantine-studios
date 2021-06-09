import React from 'react';
import '../styles/contact.css';

const Contact = () => {
  return(
    <div className="contact-container">
      <h1 className="contact-title">Contact</h1>

      <form encType="multipart/form-data" action="https://formsubmit.co/yohanesdemissie@gmail.com" method="POST" >
      <div>
        <label htmlFor="name">
          <input className="input-form" type="text" name="name" id="name" placeholder="Name" />
        </label>
      </div>
      <br />
      <div>
        <label htmlFor="email">
          <input className="input-form" type="text" name="email" id="email" placeholder="Email" />
          <input type="hidden" name="_next" value="http://localhost:3000/thankyou" />
        </label>
      </div>
      <br />
      <div>
        <label htmlFor="subject">
          <input className="input-form" type="subject" name="subject" id="subject" placeholder="Subject" />
        </label>
      </div>
      <br />

      <div>
        <br />
        <label htmlFor="email">
        <textarea type="search" className="input-message-form" name="Inquiry" type="text" placeholder="Send your inquiries here..."></textarea>
        </label>
      </div>
      <div>

        <input className="submit-button" type="submit" name="submit" value="Send" />
      </div>

    </form>
    </div>
  )
}

export default Contact;