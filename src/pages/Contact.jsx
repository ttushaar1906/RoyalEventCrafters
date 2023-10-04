import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import '../styles/styling.css';

export default function Contact() {
  const [isChecked, setIsChecked] = useState(false);

  function handleCheckboxChange() {
    setIsChecked(!isChecked);
  }

  return (
    <div>
      <label htmlFor="myCheck">Checkbox:</label>
      <input
        type="checkbox"
        id="myCheck"
        onChange={handleCheckboxChange}
        checked={isChecked}
      />

{/* <label htmlFor="myCheck">Checkbox:</label>
      <input
        type="checkbox"
        id="myCheck"
        onChange={handleCheckboxChange}
        checked={isChecked}
      /> */}

      {isChecked ? (
        <p>Checkbox is CHECKED!</p>
      ) : (
        <p style={{ display: 'none' }}>Checkbox is not CHECKED!</p>
      )}

      <section className="contactUs" id="contactUs">
        <div className="container">
          <form action="" className="form">
            <div className="left-contact-sec">
              <h1 className="lg-heading">Write Us</h1>
              <label htmlFor="name">Name:</label>
              <input type="text" name="name" id="name" />
              <label htmlFor="email">Email:</label>
              <input type="email" name="email" id="email" />
              <label htmlFor="subject">Subject:</label>
              <input type="text" name="subject" id="subject" />
              <label htmlFor="message">Message:</label>
              <textarea name="message" id="message" cols="63" rows="5"></textarea>
              <button type="submit" className="btn">Send Message</button>
            </div>
            <div className="right-contact-sec">
              <h1 className="lg-heading">Contact Information</h1>
              <p>We're open for any suggestion or just to have a chat</p>
              <div className="cont-info">
                <div className="cont-content">
                  <FontAwesomeIcon icon={faLocationDot} style={{ color: '#ffffff' }} />
                  <span>  Address:</span>Royal Event Crafters,
                  MG Road,
                  Pune, Maharashtra 411001.
                </div>
                <div className="cont-content">
                  <FontAwesomeIcon icon={faPhone} style={{ color: '#ffffff' }} />
                  <span>  Phone: </span>9527921209
                </div>
                <div className="cont-content">
                  <FontAwesomeIcon icon={faEnvelope} style={{ color: '#ffffff' }} />
                  <span>  Email: </span>ttushaar45@gmail.com
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
