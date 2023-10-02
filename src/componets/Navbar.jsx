import React from 'react';
import { Link } from 'react-router-dom';
// import '../styles/navbar.css';
import '../styles/styling.css';

export default function CustomNavbar() {
  return (
    <>
      <nav class="nav-section">
        <div class="container">
          <div class="logo">
            <img src="https://i.postimg.cc/BbL9q4cc/logo.png" alt="" />
          </div>
          <ul class="nav-items">
            <li class="nav-item"> <Link to="../">Home</Link></li>
            <li class="nav-item"> <Link to="../RoyalEvent">Events</Link></li>
            <li class="nav-item"> <Link to="../Contact">Contact Us</Link></li>
            <li class="nav-item"><Link to="/feedbacks">Feedback</Link></li>
            <li class="nav-item"><Link to="/photos">Photos</Link></li>
            <li class="nav-item"><Link to="/login">Logout</Link></li>
          </ul>
        </div>
      </nav>
    </>
  );
}
