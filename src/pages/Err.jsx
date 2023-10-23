import React from "react";
import '../styles/styling.css';
import { Link } from 'react-router-dom';

export default function Err(){
    return(
        <>
        <div className="container err">
            <div className="err-msg">
            <h1 className="err-heading">401!</h1>
            <p className="md-heading">Unauthorized</p>
            <button className="btn"><Link to="/">Go to Login page</Link></button>
            </div>
            <div className="err-img">
                <img src="https://i.postimg.cc/qqdKj3r4/401-Error-Unauthorized-amico.png" alt="" />
            </div>
        </div>
        </>
    )
}