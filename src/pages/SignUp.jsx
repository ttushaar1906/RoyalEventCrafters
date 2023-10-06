import React from "react";
import { Link } from "react-router-dom";
import '../styles/styling.css';
export default function SignUp() {
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
                        <form action="">
                            <label htmlFor="Name">Enter Username</label>
                            <input type="text" placeholder="Enter Username " required />
                            <label htmlFor="email">Enter Email</label>
                            <input type="email" placeholder="Enter Email " required />
                            <label htmlFor="Password">Enter Password</label>
                            <input type="password" placeholder="Enter Password" required />
                            <button className="btn">Create Account</button>
                        </form>
                        <p>Already have an Account?<Link to="/login"> Login </Link></p>
                       
                    </div>
                </div>
            </div>
        </body>
    )
}