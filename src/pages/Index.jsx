import React from "react";
import '../styles/styling.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from '@fortawesome/free-brands-svg-icons'; 
import { faFacebook } from '@fortawesome/free-brands-svg-icons';


export default function Login(){
    return(
        <div>
            <div className="container form-container">
                <div className="form-img">
                <img src="https://i.postimg.cc/26syNgby/Wedding-planner-amico.png" alt="" />
                </div>
                <div className="form-cont">
                    <h2 className="md-heading">Login</h2>
                    <form action="">
                        <label htmlFor="Name">Enter Email</label>
                       <input type="text" placeholder="Enter Email " required/>
                       <label htmlFor="Password">Enter Password</label>
                       <input type="text" placeholder="Enter Password" required/>
                       <button className="btn">Login</button>
                    </form>
                    <p>Don't have an account yet?<a href="./Signup"> Signup </a></p>
                    <p>OR</p>
                    <span>
                    <FontAwesomeIcon icon={faGoogle} style={{color: "#ffffff",}} /></span>
                    <span>
                    <FontAwesomeIcon icon={faFacebook} style={{color: "#ffffff",}} />
                    </span>
                </div>
            </div>
        </div>
    )
}