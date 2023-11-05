import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../styles/styling.css';
import axios from 'axios';

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/login", formData); // Use the correct endpoint ("/login")

      if (response.status === 200) {
        navigate("/Home");
      } else {
        console.error("Login failed.");
      }
    } catch (error) {
      console.error("Error logging in:", error);
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
        </div>
      </div>
    </div>
  );
}
