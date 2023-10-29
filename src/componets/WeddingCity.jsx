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

// Function to handle checkbox changes
// Function to handle checkbox changes
const handleCheckboxChange = (index) => {
    const updatedOtherItemData = [...otheritemdata];
    updatedOtherItemData[index].checked = !updatedOtherItemData[index].checked;
    if (!updatedOtherItemData[index].checked) {
        updatedOtherItemData[index].count = 0; // Set count to 0 when unchecked
    }
    setOtheritemData(updatedOtherItemData);
};

// Function to increase count
const increaseCount = (index) => {
    if (otheritemdata[index].checked && otheritemdata[index].count < 10) {
        const updatedOtherItemData = [...otheritemdata];
        updatedOtherItemData[index].count++;
        setOtheritemData(updatedOtherItemData);
    }
};

// Function to decrease count
const decreaseCount = (index) => {
    if (otheritemdata[index].checked && otheritemdata[index].count > 0) {
        const updatedOtherItemData = [...otheritemdata];
        updatedOtherItemData[index].count--;
        setOtheritemData(updatedOtherItemData);
    }
};

// Function to set count to zero
const setToZero = (index) => {
    if (otheritemdata[index].checked) {
        const updatedOtherItemData = [...otheritemdata];
        updatedOtherItemData[index].count = 0;
        setOtheritemData(updatedOtherItemData);
    }
};

useEffect(() => {
    const getOtherItemData = async () => {
        try {
            const reqOtheritemData = await fetch(`http://localhost:4000/packages/RoyalEvent/wedding/otheritems`);
            if (reqOtheritemData.ok) {
                const respOtheritemData = await reqOtheritemData.json();
                // Initialize checked and count properties in otheritemdata
                const initializedOtheritemdata = respOtheritemData.map(item => ({
                    ...item,
                    checked: false,
                    count: 0,
                }));
                setOtheritemData(initializedOtheritemdata);
                console.log("data", initializedOtheritemdata);
            } else {
                console.error("Error fetching other item data");
            }
        } catch (error) {
            console.error("Error: ", error);
        }
    }
    getOtherItemData();
}, [weddingCity]);

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
}, [weddingCity]);


    return (
        <div className='booking-pg'>
            <div className="container">
                {eventdata.map((event, index) => (
                    <div className="bookings-display" key={index}>
                        <div className="booking-display-img">
                            <img src={event.weddingImg} alt="" />
                        </div>
                        <div className="card-body">
                            <p className="card-text city-loc">{event.location}</p>
                            <h1 className="md-heading city-display"><span className='price'><FontAwesomeIcon icon={faLocationDot} style={{ color: "#e4007d" }} /> {event.weddingCity}</span></h1>
                            <p className="card-text card-text-desc">{event.weddingDesc}</p>
                            <p className="planning-fee">Price: <span className='price'><FontAwesomeIcon icon={faIndianRupeeSign} /> {event.price}</span></p>
                            <h3 className='md-heading'>About This Package:</h3>
                            <p className='card-text'>{event.aboutPackage}</p>
                        </div>
                    </div>
                ))}<form action="" className="booking-form">
                    <h1 className='lg-heading'>"Dreamy Destination Weddings: Book Your Blissful Celebration Today!"</h1>
                    {/* <h1>This is the form</h1> */}

                    {eventdata.map((event, index) => (
                        <div key={index}>
                            <input type="text" name={`eventName-${index}`} id={`eventName-${index}`} value={`${event.location}, ${event.weddingCity}`} />
                            {/* <p className="location">{event.location}</p> */}
                        </div>
                    ))}
                    <input type="text" name="name" id="name" placeholder='Enter your Name' required />
                    <input type="number" name="mobileNumber" id="mobileNumber" placeholder='Enter Mobile Number' required />
                    <input type="email" name="email" id="email" placeholder='Enter your Email Address' required />
                    <input type="date" name="functionDate" id="functionDate" placeholder='Function Date' required />
                    <input type="number" name="noOfGuest" id="noOfGuest" placeholder='No Of Guest (min 50)' required />

                    <p className='event-time'>Function Time</p>
                    <div className="function">
                        <input type="radio" name="functionTime" id="Day" value="Day" />
                        <label htmlFor="Day">Day</label>
                        <input type="radio" name="functionTime" id="Evening" value="Evening" />
                        <label htmlFor="Evening">Evening</label>
                    </div>
                    <h1>Others</h1>
                    <div className="other-items">
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
                                    <button onClick={() => decreaseCount(index)} disabled={!item.checked}>-</button>
                                    {item.count}
                                    <button onClick={() => increaseCount(index)} disabled={!item.checked}>+</button>
                                    <button onClick={() => setToZero(index)}>Set to Zero</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <input type="button" value="Book" />
                </form>
            </div>
        </div>

    )
}
