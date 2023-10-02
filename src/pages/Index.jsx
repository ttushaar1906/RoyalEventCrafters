import React from "react";
import '../styles/styling.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";


export default function Login() {
    return (
        <body className="body">
            <div className="body-img">
                <img src="https://www.eventmanagement.net.my/wp-content/uploads/elementor/thumbs/3-q2njvo9tm5ztku36bmvpif1dcomonhstx5dr98fsww.jpeg" alt="" />
            </div>
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
                        <p>Don't have an account yet?<a href="./Signup"> Signup </a></p>
                        <p>OR</p>
                        <div className="social-media"> 
                           <Link to="www.google.com" ><FontAwesomeIcon icon={faGoogle} style={{ color: "#ffffff", }} /></Link>
                           <a href="www.google.com" ><FontAwesomeIcon icon={faFacebook} style={{ color: "#ffffff", }} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    )
}