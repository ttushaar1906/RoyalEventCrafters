import React from 'react';
import '../styles/styling.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faInstagram, faTwitter, faFacebook, faYoutube, faSnapchat } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

library.add(fab, faInstagram, faTwitter, faFacebook, faYoutube, faSnapchat);

export const Footer = () => {
  const location = useLocation();
  const isLoginOrSignUp = location.pathname === '/Index' || location.pathname === '/signUp';
  return (
    <div>
      {!isLoginOrSignUp &&
        <footer className="footer">
          <div className="logo social-media-links">
            <img src="https://i.postimg.cc/BbL9q4cc/logo.png" alt="" />
          </div>
          <div className="social-media-links">
            <Link to="">
              <FontAwesomeIcon icon={faInstagram} style={{ color: "#ffffff" }} />
            </Link>
            <Link to="">
              <FontAwesomeIcon icon={faTwitter} style={{ color: "#ffffff" }} />
            </Link>
            <Link to="">
              <FontAwesomeIcon icon={faFacebook} style={{ color: "#ffffff" }} />
            </Link>
            <Link to="">
              <FontAwesomeIcon icon={faYoutube} style={{ color: "#ffffff" }} />
            </Link>
            <Link to="">
              <FontAwesomeIcon icon={faSnapchat} style={{ color: "#ffffff" }} />
            </Link>
          </div>
          <div className="copywrite social-media-links">
            <p>© 2023, Royal Event Crafters</p>
          </div>
        </footer>
      }
    </div>
  );
}

export default Footer;
