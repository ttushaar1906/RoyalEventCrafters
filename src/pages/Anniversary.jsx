import React, { useState, useEffect } from 'react';
import '../styles/styling.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
export default function Anniversary() {
    const [eventdata, setEventData] = useState([]);

    useEffect(() => {
        const getEventData = async () => {
            const reqEventdata = await fetch('http://localhost:3000/packages/anniversary');
            const respEventData = await reqEventdata.json();
            setEventData(respEventData);
            console.log("data", respEventData)
        }
        getEventData();
    }, []);

    return (
        <>
            <h1 className="lg-heading wed-heads">Elevate your wedding with our royal touch.</h1>
            <div className="container">
                {eventdata.map((event, index) => (
                    <div className="card-events" key={index}>
                        {/* <link to=""> */}
                        <div className="card-img">
                            <img src={event.decoImg} alt="" />
                        </div>
                        <div className="card-body">
                            <h5 className="md-heading">{event.placeTitle}</h5>
                            <p className="planning-fee"><FontAwesomeIcon icon={faIndianRupeeSign} style={{ color: "#000", }} /> Planning Fee</p>
                            <p className="price">Price: {event.price} </p>
                            {/* Add your button here */}
                            <button className='btn'><Link to={`/RoyalEvent/anniversary/${event.placeTitle}`}>Show More</Link></button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
