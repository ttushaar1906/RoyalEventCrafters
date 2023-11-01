import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign, faLocationDot, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

export default function WeddingCity() {
    const { partyType } = useParams(); // Get the 'city' parameter from the route

    const [eventdata, setEventData] = useState([]);
    const [otheritemdata, setOtheritemData] = useState([]);
    useEffect(() => {
        const getEventData = async () => {
            try {
                const reqEventdata = await fetch(`http://localhost:4000/packages/RoyalEvent/wedding/${partyType}`);
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
    }, [partyType]); // Make sure to include 'weddingCity' in the dependency array

    //other items
    // useEffect(() => {
    //     const getOtherItemData = async () => {
    //         try {
    //             const reqOtheritemData = await fetch(`http://localhost:4000/packages/RoyalEvent/wedding/otheritems`);
    //             if (reqOtheritemData.ok) {
    //                 const respOtheritemData = await reqOtheritemData.json();
    //                 // Initialize checked and count properties in otheritemdata
    //                 const initializedOtheritemdata = respOtheritemData.map(item => ({
    //                     ...item,
    //                     checked: false,
    //                     count: 0,
    //                 }));
    //                 setOtheritemData(initializedOtheritemdata);
    //                 console.log("data", initializedOtheritemdata);
    //             } else {
    //                 console.error("Error fetching other item data");
    //             }
    //         } catch (error) {
    //             console.error("Error: ", error);
    //         }
    //     }
    //     getOtherItemData();
    // });

    const [formData, setFormData] = useState({
        eventLoc: "",
        username: "",
        mobileNo: "",
        email: "",
        bookingDate: "",
        noOfGuests: "",
        eventTime: "",
        city:"",
        address:"",
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
                window.location.href = '/Home';
            } else {
                console.error("Order submission failed.");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className='booking-pg'>
            <div className="linking-tags">
                <Link to="/Home">Home </Link> <FontAwesomeIcon icon={faArrowRight} size="xs" style={{ color: "#000000", }} /> <Link to="/RoyalEvent">RoyalEvents</Link> <FontAwesomeIcon icon={faArrowRight} size="xs" style={{ color: "#000000", }} /><Link to="/RoyalEvent/Wedding">Birthday</Link>
            </div>

            <h1 className="lg-heading wed-heads">"Sparkling Moments: A Birthday Celebration to Remember".</h1>

            <div className="container">
                {eventdata.map((event, index) => (
                    <div className="bookings-display" key={index}>
                        <div className="booking-display-img">
                            <img src={event.partyDeco} alt="" />
                        </div>
                        <div className="card-body">
                            <p className="card-text city-loc">{event.partyType}</p>
                            <p className="card-text card-text-desc">{event.partyDesc}</p>
                            <p className="planning-fee">Price: <span className='price'><FontAwesomeIcon icon={faIndianRupeeSign} /> {event.partyPrice}</span></p>
                            <p className="card-text card-text-desc">{event.aboutPackage}</p>
                        </div>
                    </div>
                ))}
                <form action="" className="booking-form additional-info" onSubmit={handleSubmit}>

                    {eventdata.map((event, index) => (
                        <div key={index}>
                            <input type="text" name={`eventName-${index}`} id={`eventName-${index}`} value={`${event.partyType}`} />

                        </div>
                    ))}
                    <input type="text" name="username" value={formData.username} onChange={handleInputChange} placeholder='Enter your Name' />
                    <input type="number" name="mobileNo" value={formData.mobileNo} onChange={handleInputChange} placeholder='Enter your Mobile No' />
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder='Enter Your Email' />

                    <input type="date" name="bookingDate" value={formData.bookingDate} onChange={handleInputChange} />

                    <input type="number" name="noOfGuests" value={formData.noOfGuests} onChange={handleInputChange} placeholder='Enter No of  Guests' />

                    <label htmlFor="dropdown">Select City:</label>

                    <select id="dropdown" value={selectedOption} onChange={handleDropdownChange}>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Pune">Pune</option>
                        <option value="Bangalore">Bangalore</option>
                        <option value="Jaipur">Jaipur</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Chennai">Chennai</option>
                        <option value="Agra">Agra</option>
                        <option value="Raipur">Raipur</option>
                        <option value="Raipur">Raipur</option>
                        <option value="Kota">Kota</option>
                        <option value="Surat">Surat</option>
                        <option value="Kolkata">Kolkata</option>
                        <option value="Hydrabad">Hydrabad</option>
                    </select>

                    <input type="text" name="address" value={formData.address} onChange={handleInputChange} placeholder='Enter Your Address' />
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
                        ))}
                    </div> */}
                    <button type='submit' className='submit-btn'>Book</button>
                </form>
            </div>
        </div>
    )
}