import React, { useState, useEffect } from 'react';
import '../styles/styling.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign,faArrowRight } from "@fortawesome/free-solid-svg-icons";
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


    
    const [formData, setFormData] = useState({
        eventLoc: "",
        username: "",
        mobileNo: "",
        email: "",
        bookingDate: "",
        noOfGuests: "",
        eventTime: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await fetch("/orders", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
    
            if (response.status === 200) {
                console.log("Order submitted successfully.");
                // Redirect to another page (e.g., '/Home')
                window.location.href = '/Thanks';
            } else {
                console.error("Order submission failed.");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

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
                    <form action="" className="booking-form" onSubmit={handleSubmit}>
                    <h1 className='lg-heading'>"Dreamy Destination Weddings: Book Your Blissful Celebration Today!"</h1>
                    {/* <h1>This is the form</h1> */}

                    {eventdata.map((event, index) => (
                        <div key={index}>
                            <input type="text" name={`eventName-${index}`} id={`eventName-${index}`} value={`${event.placeTitle}`} />

                        </div>
                    ))}
                    <input type="text" name="username" value={formData.username} onChange={handleInputChange} placeholder='Enter your Name'/>
                    <input type="number" name="mobileNo" value={formData.mobileNo} onChange={handleInputChange} placeholder='Enter your Mobile No' />
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder='Enter Your Email'/>
                    <input type="date" name="bookingDate" value={formData.bookingDate} onChange={handleInputChange} />
                    <input type="number" name="noOfGuests" value={formData.noOfGuests} onChange={handleInputChange} placeholder='Enter NO of  Guests' />
                    <p className='event-time'>Function Time</p>
                    <div className="function">
                        <input type="radio" name="eventTime" value="Day" onChange={handleInputChange} />
                        <label htmlFor="Day">Day</label>
                        <input type="radio" name="eventTime" value="Evening" onChange={handleInputChange} />
                        <label htmlFor="Evening">Evening</label>
                    </div>
                    <h1>Others</h1>
                    {/* <div className="other-items">
                        {otheritemdata.map((item, index) => (
                            <div key={index}>
                                <div className='otherItem-show'>
                                    <input
                                        type="checkbox"
                                        name={`item-${index}`}
                                        checked={item.checked}
                                        onChange={() => handleCheckboxChange(index)}
                                    />
                                    <p className="otherItems-List">
                                        {item.items} <span>{item.prices}/-</span>
                                    </p>
                                    <button className='incDec-btn' onClick={() => decreaseCount(index)} disabled={!item.checked}>-</button>
                                    {item.count}
                                    <button className='incDec-btn' onClick={() => increaseCount(index)} disabled={!item.checked}>+</button>
                                </div>
                            </div>
                        ))} */}
                    {/* </div> */}
                    <button type='submit' className='submit-btn'>Book</button>
                </form>
                </div>
            </div>   
        </>
                )
}