import React, { useState, useEffect } from 'react';
import '../styles/styling.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
export default function Wedding() {
    const [eventdata, setEventData] = useState([]);

    useEffect(() => {
        const getEventData = async () => {
            const reqEventdata = await fetch('http://localhost:3000/packages/RoyalEvent/birthdayparty');
            const respEventData = await reqEventdata.json();
            setEventData(respEventData);
            console.log("data", respEventData)
        }
        getEventData();
    }, []);

    return (
        <>
            <h1 className="lg-heading wed-heads">Let's make your birthday unforgettable! Celebrate with style and book your perfect party today.</h1>
            <div className="container">
                {eventdata.map((event, index) => (
                    <div className="card-events" key={index}>
                        {/* <link to=""> */}
                        <div className="card-img">
                            <img src={event.partyDeco} alt="" />
                        </div>
                        <div className="card-body">
                            <h5 className="md-heading">{event.partyType}</h5>
                            {/* <p className="card-text">{event.location}</p> */}
                            <p className="planning-fee"><FontAwesomeIcon icon={faIndianRupeeSign} style={{ color: "#000", }} /> Planning Fee</p>
                            <p className="price">Price: {event.partyPrice} </p>
                            {/* Add your button here */}
                            <button className='btn'><Link to={`/RoyalEvent/birthdayParty/${event.partyType}`}>Show More</Link></button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
