import React, { useState, useEffect } from 'react';
import '../styles/styling.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useParams } from 'react-router-dom';

export default function WeddingCity() {
    const { weddingCity } = useParams(); // Get the 'city' parameter from the route

    const [eventdata, setEventData] = useState([]);
    const [otheritemdata, setOtheritemData] = useState([]);

    useEffect(() => {
        const getEventData = async () => {
            const reqEventdata = await fetch(`http://localhost:4000/packages/wedding/${weddingCity}`);
            const respEventData = await reqEventdata.json();
            setEventData(respEventData);
            console.log("data", respEventData);
        }
        getEventData();
    }, [weddingCity]); // Make sure to include 'city' in the dependency array

    useEffect(() => {
        const getotheritemdata = async () => {
            try {
                const reqOtheritemData = await fetch(`http://localhost:4000/packages/RoyalEvent/wedding/otheritems`);
                if (reqOtheritemData.ok) {
                    const respOtheritemData = await reqOtheritemData.json();
                    setOtheritemData(respOtheritemData);
                    console.log("data", respOtheritemData);
                } else {
                    console.error("Error fetching other item data");
                }
            } catch (error) {
                console.error("Error: ", error);
            }
        }
        getotheritemdata();
    }, [weddingCity]);




    return (
        <>
            <h1 className="lg-heading wed-heads">Elevate your wedding with our royal touch.</h1>
            <div className="container">
                {eventdata.map((event, index) => (
                    <div className="card-events card-display" key={index}>
                        <div className="card-img">
                            <img src={event.weddingImg} alt="" />
                        </div>
                        <div className="card-body">
                            <p className="card-text city-loc">{event.location}</p>
                            <h1 className="md-heading city-display"><span className='price'><FontAwesomeIcon icon={faLocationDot} style={{ color: "#e4007d", }} /> {event.weddingCity}</span></h1>
                            <p className="card-text card-text-desc">{event.weddingDesc}</p>
                            <p className="planning-fee">Price: <span className='price'><FontAwesomeIcon icon={faIndianRupeeSign} /> {event.price}</span></p>

                            {/* <button className='btn'><Link to="">Show More</Link></button> */}
                        </div>
                    </div>
                ))}
            </div>

            <form action="" className="booking-form">
                <h1>this is form</h1>
                <div className="container">
                    {otheritemdata.map((event, index) => (
                        <div className="card-events card-display" key={index}>
                            <div className="card-img">
                                {/* <img src={event.weddingImg} alt="" /> */}
                             <input type="checkbox" name="item" id="" />   <p className="card-text city-loc">{event.items}</p>
                                <p className="card-text city-loc">{event.prices}/-</p>
                            </div>
                        </div>
                    ))}
                </div>
            </form>



        </>
    )
}