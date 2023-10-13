import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import '../styles/styling.css';

export default function CustomNavbar() {
  const location = useLocation();
  const isLoginOrSignUp = location.pathname === '/Index' || location.pathname === '/signUp' ;
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  
  
  
  return (
    
    <>
      {!isLoginOrSignUp &&
        <nav class="nav-section">
          <div class="container">
            <div class="logo">
              <img src="https://i.postimg.cc/BbL9q4cc/logo.png" alt="" />
            </div>
            <ul class="nav-items">
              <li class="nav-item"> <Link to="../">Home</Link></li>
              <li class="nav-item"> <Link to="../RoyalEvent">Events</Link></li>
              <li class="nav-item"> <Link to="../Contact">Contact Us</Link></li>
              <li class="nav-item"><Link to="/Reviews">Reviews</Link></li>
              <li class="nav-item"><Link to="/photos">Photos</Link></li>
              {isLoggedIn &&
                <li class="nav-item"><Link to="/dashboard">Dashboard</Link></li>
              }
               {isLoggedIn &&
                <li class="nav-item"><Link to="/logout">Logout</Link></li>
              }
              {!isLoggedIn &&
              <li class="nav-item"><Link to="/Index">Login</Link></li>
              }
              </ul>

          </div>
        </nav>
      }
    </>
  );
}
