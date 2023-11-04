import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/styling.css";
import axios from "axios";
import * as Yup from "yup";

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

  const schema = Yup.object().shape({
    username: Yup.string().required().min(3).max(25),
    email: Yup.string().email().required(),
    password: Yup.string().required().min(8).max(25),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = {
        username: e.target.username.value,
        email: e.target.email.value,
        password: e.target.password.value,
      };

      // Validate the form data with Yup schema
      schema.validate(formData)
        .then(() => {
          // Form data is valid, send a POST request to your server
          axios.post("/signup", formData)
            .then((response) => {
              if (response.status === 200) {
                navigate("/Home");
              } else {
                console.error("Sign-up failed");
              }
            })
            .catch((error) => {
              console.error("Error logging in:", error);
            });
        })
        .catch((errors) => {
          // There are validation errors
          alert(errors.errors.join("\n"));
        });
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
          <button type="submit" className="btn login-btn">
            Create Account
          </button>
        </form>
        <p>
          Already have an Account? <Link to="/Home">Login</Link>
        </p>
      </div>
    </div>
  );
}
