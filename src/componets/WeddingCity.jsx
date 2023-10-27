import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useParams } from 'react-router-dom';

export default function WeddingCity() {
    const { weddingCity } = useParams(); // Get the 'city' parameter from the route

    const [eventdata, setEventData] = useState([]);
    const [otheritemdata, setOtheritemData] = useState([]);

    useEffect(() => {
        const getEventData = async () => {
            try {
                const reqEventdata = await fetch(`http://localhost:4000/packages/wedding/${weddingCity}`);
                if (reqEventdata.ok) {
                    const respEventData = await reqEventdata.json();
                    setEventData(respEventData);
                    console.log("data", respEventData);
                } else {
                    console.error("Error fetching event data");
                }
            } catch (error) {
                console.error("Error: ", error);
            }
        }
        getEventData();
    }, [weddingCity]); // Make sure to include 'weddingCity' in the dependency array

    useEffect(() => {
        const getOtherItemData = async () => {
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
        getOtherItemData();
    }, [weddingCity]);

    return (
        <div className='forms'>
            {/* <h1 className="lg-heading wed-heads">Elevate your wedding with our royal touch.</h1> */}
            <div className="container">
                {eventdata.map((event, index) => (
                    <div className="card-events card-display booking-display" key={index}>
                        <div className="card-img">
                            <img src={event.weddingImg} alt="" />
                        </div>
                        <div className="card-body">
                            <p className="card-text city-loc">{event.location}</p>
                            <h1 className="md-heading city-display"><span className='price'><FontAwesomeIcon icon={faLocationDot} style={{ color: "#e4007d" }} /> {event.weddingCity}</span></h1>
                            <p className="card-text card-text-desc">{event.weddingDesc}</p>
                            <p className="planning-fee">Price: <span className='price'><FontAwesomeIcon icon={faIndianRupeeSign} /> {event.price}</span></p>
                            <h3>About This Package:</h3>
                            <p className='about-package'>{event.aboutPackage}</p>
                        </div>
                    </div>
                ))}


                <form action="" className="booking-form">
                    <h1>This is the form</h1>
                    <input type="text" name="name" id="name" placeholder='Enter your Name' required />
                    <input type="number" name="mobileNumber" id="mobileNumber" placeholder='Enter Mobile Number' required />
                    <input type="email" name="email" id="email" placeholder='Enter your Email Address' required />
                    <input type="date" name="functionDate" id="functionDate" placeholder='Function Date' required />
                    <input type="number" name="noOfGuest" id="noOfGuest" placeholder='No Of Guest (min 50)' required />

                    <p>Function Time</p>
                    <input type="radio" name="functionTime" id="Day" value="Day" />
                    <label htmlFor="Day">Day</label>
                    
                    <input type="radio" name="functionTime" id="Evening" value="Evening" />
                    <label htmlFor="Evening">Evening</label>
          <h1>Others</h1>
                {/* <div className="container"> */}
                {otheritemdata.map((item, index) => (
                    <div key={index}>
                        <div>
                            <input type="checkbox" name="item" id="" />
                            <p className="otherItems-List">{item.items} <span>{item.prices}/- </span></p>
                        </div>
                    </div>
                ))}
                {/* </div> */}
                <input type="button" value="Book" />
            </form>
        </div>
        </div >
    )
}
