import React, { useState, useEffect } from 'react';
import '../styles/styling.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
import { useParams } from 'react-router-dom';

export default function WeddingCity() {
    const { weddingCity } = useParams(); // Get the 'city' parameter from the route

    const [eventdata, setEventData] = useState([]);

    useEffect(() => {
        const getEventData = async () => {
            const reqEventdata = await fetch(`http://localhost:4000/packages/wedding/${weddingCity}`);
            const respEventData = await reqEventdata.json();
            setEventData(respEventData);
            console.log("data", respEventData);
        }
        getEventData();
    }, [weddingCity]); // Make sure to include 'city' in the dependency array

    return (
        <>
            <h1 className="lg-heading wed-heads">Elevate your wedding with our royal touch.</h1>
            <div className="container">
                {eventdata.map((event, index) => (
                    <div className="card-events" key={index}>
                        <div className="card-img">
                            <img src={event.weddingImg} alt="" />
                        </div>
                        <div className="card-body">
                            <h5 className="md-heading">{event.weddingCity}</h5>
                            <p className="card-text">{event.location}</p>
                            <p className="card-text">{event.weddingDesc}</p>

                            <p className="planning-fee"><FontAwesomeIcon icon={faIndianRupeeSign} style={{ color: "#000", }} /> Planning Fee</p>
                            <p className="price">Price: {event.price} </p>
                            {/* <button className='btn'><Link to="">Show More</Link></button> */}
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}