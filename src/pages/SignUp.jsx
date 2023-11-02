import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/styling.css";

export default function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
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
      const response = await fetch("/signup", { // Update the endpoint to match the server route
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 200) {
        navigate('/Home');
      } else {
        console.error("Sign-up failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div className="container form-container">
      <div className="form-img">
        <img src="https://i.postimg.cc/26syNgby/Wedding-planner-amico.png" alt="" />
      </div>
      <div className="form-cont">
        <h1 className="lg-heading">Royal Event Crafters</h1>
        <h2 className="md-heading">Create New Account</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Enter Username</label>
          <input
            type="text"
            placeholder="Enter Username"
            name="username"
            id="username"
            required
            value={formData.username}
            onChange={handleInputChange}
          />
          <label htmlFor="email">Enter Email</label>
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            id="email"
            required
            value={formData.email}
            onChange={handleInputChange}
          />
          <label htmlFor="password">Enter Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            id="password"
            required
            value={formData.password}
            onChange={handleInputChange}
          />
          <button type="submit" className="btn submit-btn">
            Create Account
          </button>
        </form>
        <p>
          Already have an Account? <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
}
