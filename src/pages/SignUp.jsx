import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/styling.css";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  // Initialize state for form fields
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate()
  // Handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Send a POST request to your backend with formData
    try {
      const response = await fetch("/Home", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Handle response and redirect if necessary
      if (response.status === 200) {
        navigate('/Home')
        // Redirect the user to the login page or a success page
      } else {
        // Handle errors, e.g., display an error message to the user
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <body className="body">
      <div>
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
              <button type="submit" className="btn">
                Create Account
              </button>
            </form>
            <p>
              Already have an Account? <Link to="/">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </body>
  );
}
