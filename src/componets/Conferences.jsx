import React, { useState, useEffect } from 'react';
import '../styles/styling.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useParams } from 'react-router-dom';

export default function Conferences() {
    const { eventTitle } = useParams(); // Get the 'city' parameter from the route

    const [eventdata, setEventData] = useState([]);

    useEffect(() => {
        const getEventData = async () => {
            const reqEventdata = await fetch(`http://localhost:4000/packages/RoyalEvent/${eventTitle}`);
            const respEventData = await reqEventdata.json();
            setEventData(respEventData);
            console.log("data", respEventData);
        }
        getEventData();
    }, [eventTitle]); // Make sure to include 'city' in the dependency array

    return (
        <>
            <h1 className="lg-heading wed-heads">Elevate your wedding with our royal touch.</h1>
            <div className="container">
                {eventdata.map((event, index) => (
                    <div className="card-events card-display" key={index}>
                        <div className="card-img">
                            <img src={event.eventImg} alt="" />
                        </div>
                        <div className="card-body">
                            <p className="card-text city-loc">{event.eventTitle}</p>
                            {/* <h1 className="md-heading city-display"><span className='price'><FontAwesomeIcon icon={faLocationDot} style={{ color: "#e4007d", }} /> {event.weddingCity}</span></h1> */}
                            <p className="card-text card-text-desc">{event.eventDesc}</p>
                            <p className="card-text card-text-desc">{event.category}</p>
                            <p className="planning-fee">Price: <span className='price'><FontAwesomeIcon icon={faIndianRupeeSign} /> {event.price}</span></p>

                            {/* <button className='btn'><Link to="">Show More</Link></button> */}
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}