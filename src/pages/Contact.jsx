import React from 'react'
import '../styles/styling.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <div>
       <section className="contactUs" id="contactUs"> {/* Use className instead of class */}
                <div className="container"> {/* Use className instead of class */}
                    <form action="" className="form"> {/* Use className instead of class */}
                        <div className="left-contact-sec"> {/* Use className instead of class */}
                            <h1 className="lg-heading">Write Us</h1> {/* Use className instead of class */}
                            <label htmlFor="name">Name:</label> {/* Use htmlFor instead of for */}
                            <input type="text" name="name" id="name" />
                            <label htmlFor="email">Email:</label> {/* Use htmlFor instead of for */}
                            <input type="email" name="email" id="email" />
                            <label htmlFor="subject">Subject:</label> {/* Use htmlFor instead of for */}
                            <input type="text" name="subject" id="subject" />
                            <label htmlFor="message">Message:</label> {/* Use htmlFor instead of for */}
                            <textarea name="message" id="message" cols="63" rows="5"></textarea>
                            <button type="submit" className="btn">Send Message</button> {/* Use className instead of class */}
                        </div>
                        <div className="right-contact-sec"> {/* Use className instead of class */}
                            <h1 className="lg-heading">Contact Information</h1> {/* Use className instead of class */}
                            <p>We're open for any suggestion or just to have a chat</p>
                            <div className="cont-info"> {/* Use className instead of class */}
                                <div className="cont-content"> {/* Use className instead of class */}
                                    <FontAwesomeIcon icon={faLocationDot} style={{ color: '#ffffff' }} />
                                    <span>  Address:</span>Royal Event Crafters,
                                    MG Road,
                                    Pune, Maharashtra 411001.
                                </div>
                                <div className="cont-content"> {/* Use className instead of class */}
                                    <FontAwesomeIcon icon={faPhone} style={{ color: '#ffffff' }} />
                                    <span>  Phone: </span>9527921209
                                </div>
                                <div className="cont-content"> {/* Use className instead of class */}
                                    <FontAwesomeIcon icon={faEnvelope} style={{ color: '#ffffff' }} />
                                    <span>  Email: </span>ttushaar45@gmail.com
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
    </div>
  )
}
