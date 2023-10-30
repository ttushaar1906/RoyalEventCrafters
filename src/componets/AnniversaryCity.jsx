import React, { useState, useEffect } from 'react';
import '../styles/styling.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign, faLocationDot,faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
export default function AnniversaryCity() {
    const { placeTitle } = useParams(); // Get the 'city' parameter from the route

    const [eventdata, setEventData] = useState([]);

    useEffect(() => {
        const getEventData = async () => {
            const reqEventdata = await fetch(`http://localhost:4000/packages/RoyalEvent/anniversary/${placeTitle}`);
            const respEventData = await reqEventdata.json();
            setEventData(respEventData);
            console.log("data", respEventData);
        }
        getEventData();
    }, [placeTitle]); // Make sure to include 'city' in the dependency array

    return (
       <>
            <div className='booking-pg'>
                <div className="linking-tags">
                    <Link to="/Home">Home</Link><FontAwesomeIcon icon={faArrowRight} size="xs" style={{color: "#000000",}} /><Link to="/RoyalEvent">RoyalEvents</Link> <FontAwesomeIcon icon={faArrowRight} size="xs" style={{color: "#000000",}} /><Link to="/RoyalEvent/Anniversary">Anniversary</Link>
                </div>

                <div className="container">
                    {eventdata.map((event, index) => (
                        <div className="bookings-display" key={index}>
                            <div className="booking-display-img">
                                <img src={event.decoImg} alt="" />
                            </div>
                            <div className="card-body">
                                <p className="card-text city-loc">{event.placeTitle}</p>
                                {/* <h1 className="md-heading city-display"><span className='price'><FontAwesomeIcon icon={faLocationDot} style={{ color: "#e4007d" }} /> {event.weddingCity}</span></h1> */}

                                {/* Add DropDown Options */}
                                <p className="card-text card-text-desc">{event.decodesc}</p>
                                <p className="planning-fee">Price: <span className='price'><FontAwesomeIcon icon={faIndianRupeeSign} /> {event.price}</span></p>
                                <h3 className='md-heading'>About This Package:</h3>
                                <p className='card-text'>{event.aboutPackage}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>   
        </>
                )
}