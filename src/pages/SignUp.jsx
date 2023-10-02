import React from "react";
import '../styles/styling.css';
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
                        <p>Already have an Account?<a href="./login"> Login </a></p>
                       
                    </div>
                </div>
            </div>
        </body>
    )
}