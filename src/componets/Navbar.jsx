import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import '../styles/styling.css';

export default function CustomNavbar() {
  const location = useLocation();
  const isLoginOrSignUp = location.pathname === '/' || location.pathname === '/signUp';
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // You should set isLoggedIn to true when the user is logged in or signed up
  // For example, you can fetch the user's login status from your backend.

  // Function to handle logout
  const handleLogout = () => {
    // Perform logout actions, and then set isLoggedIn to false
    setIsLoggedIn(false);
    // Redirect the user to the appropriate page, e.g., Home
  };

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
              {isLoggedIn ? (
                <>
                  <li className="nav-item"><Link to="/dashboard">Dashboard</Link></li>
                  <li className="nav-item"><Link onClick={handleLogout}>Logout</Link></li>
                </>
              ) : (
                <li className="nav-item"><Link to="/Index">Login</Link></li>
              )}
            </ul>
          </div>
        </nav>
      )}
    </>
  );
}
