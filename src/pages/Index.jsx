import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { Link, useNavigate } from "react-router-dom";
import '../styles/styling.css';

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate(); // You were missing parentheses here.

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send a POST request to your backend with formData
    try {
      const response = await fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Handle response and redirect if necessary
      if (response.status === 200) {
        // Redirect the user to the dashboard or a success page
        navigate('/Home');
      } else {
        // Handle errors, e.g., display an error message to the user
        alert("Invalid")
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="body">
      <div className="container form-container">
        <div className="form-img">
          <img src="https://i.postimg.cc/26syNgby/Wedding-planner-amico.png" alt="" />
        </div>
        <div className="form-cont">
          <h1 className="lg-heading">Royal Event Crafters</h1>
          <h2 className="md-heading">Login</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Enter Email</label>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
            />
            <label htmlFor="password">Enter Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              required
              value={formData.password}
              onChange={handleInputChange}
            />
            <button type="submit" className="btn">
              Login
            </button>
          </form>
          <p>Don't have an account yet?<Link to="/signUp"> Signup</Link></p>
          <p>OR</p>
          <div className="social-media">
            <a href="https://www.google.com/"><FontAwesomeIcon icon={faGoogle} style={{ color: "#ffffff" }} /></a>
            <a href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook} style={{ color: "#ffffff" }} /></a>
          </div>
        </div>
      </div>
    </div>
  );
}
