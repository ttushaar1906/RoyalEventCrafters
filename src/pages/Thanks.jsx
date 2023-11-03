import React from "react";
import '../styles/styling.css';
import { Link } from "react-router-dom";

export default function Thanks(){
    return(
        <>
        <div className="container">
            <div className="thanks-img">
                <img src="https://i.postimg.cc/Kj9dRF1R/image.png" alt="" />
            </div>
            <div className="thanks-msg">
                <h1 className="lg-heading">
                Thank you for choosing Royal Event Crafters! We're excited to create your dream event.
                </h1>
            </div>
            <Link to="/Home"><button className="btn">Home</button></Link>
        </div>
        </>
    )
}