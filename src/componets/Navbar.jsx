import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import '../styles/styling.css';

export default function CustomNavbar() {
  const location = useLocation();
  const isLoginOrSignUp = location.pathname === '/' || location.pathname === '/signUp' || location.pathname === '/Err' || location.pathname === '/Thanks';

  return (
    <>
      {!isLoginOrSignUp && (
        <nav className="nav-section">
          <div className="container">
            <div className="logo">
              <img src="https://i.postimg.cc/BbL9q4cc/logo.png" alt="" />
            </div>
            <ul className="nav-items">
              <li className="nav-item"> <Link to="/Home">Home</Link></li>
              <li className="nav-item"> <Link to="/RoyalEvent">Events</Link></li>
              <li className="nav-item"> <Link to="/Contact">Contact Us</Link></li>
              <li className="nav-item"><Link to="/Reviews">Reviews</Link></li>
              <li className="nav-item"><Link to="/photos">Photos</Link></li>
              <li className="nav-item"><Link to="/dashboard">Dashboard</Link></li>
              <li className="nav-item"><Link to='/'>Logout</Link></li>
            </ul>
          </div>
        </nav>
      )}
    </>
  );
}
