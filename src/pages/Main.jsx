import React from "react";
import '../styles/styling.css';
import { Link } from "react-router-dom";

export default function Main() {
    return (
        <>
            <div className="main-container">
                <div className="left-menu">
                    <div className="main-logo">   
                         <img src="https://i.postimg.cc/BbL9q4cc/logo.png" alt="logo" />
                        <span><Link to ="">Royal Event <p>Crafters</p></Link></span>
                    </div>
                    <ul>
                        <li className="sidebar-item"><Link to="" className="sidebar-link" href="#"> Home </Link></li>
                        <li className="sidebar-item"><Link to="" className="sidebar-link" href="#"> Royal Events </Link></li>
                        <li className="sidebar-item"><Link to="" className="sidebar-link" href="#">Contact Us </Link></li>
                        <li className="sidebar-item"><Link to="" className="sidebar-link" href="#"> Feedback </Link></li>
                        <li className="sidebar-item"><Link to="" className="sidebar-link" href="#">Dashboard </Link></li>                   
                     </ul>
                </div>
                {/* Right Content Goes here */}
                <div className="right-content"></div>
            </div>
        </>
    )
}