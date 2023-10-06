import React from "react";
import '../styles/styling.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";
// import { useLocation } from "react-router-dom";


export default function Login() {
    return (
        <body className="body">
            <div>
                <div className="container form-container">
                    <div className="form-img">
                        <img src="https://i.postimg.cc/26syNgby/Wedding-planner-amico.png" alt="" />
                    </div>
                    <div className="form-cont">
                        <h1 className="lg-heading">Royal Event Crafters</h1>
                        <h2 className="md-heading">Login</h2>
                        <form action="">
                            <label htmlFor="Name">Enter Email</label>
                            <input type="text" placeholder="Enter Email " required />
                            <label htmlFor="Password">Enter Password</label>
                            <input type="text" placeholder="Enter Password" required />
                            <button className="btn">Login</button>
                        </form>
                        <p>Don't have an account yet?<Link to="/signUp"> Signup</Link></p>
                        <p>OR</p>
                        <div className="social-media"> 
                           <Link to="https://www.google.com/" ><FontAwesomeIcon icon={faGoogle} style={{ color: "#ffffff", }} /></Link>
                           <a href="www.google.com" ><FontAwesomeIcon icon={faFacebook} style={{ color: "#ffffff", }} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    )
}