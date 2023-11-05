import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign, faLocationDot, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function WeddingCity() {
    const { weddingCity } = useParams();
    const [eventdata, setEventData] = useState([]);
    const [otheritemdata, setOtheritemData] = useState([]);
    const [formData, setFormData] = useState({
        eventLoc: "",
        username: "",
        mobileNo: "",
        email: "",
        bookingDate: "",
        noOfGuests: "",
        eventTime: "",
        chairs:"",
    });

    useEffect(() => {
        const getEventData = async () => {
            try {
                const reqEventdata = await fetch(`http://localhost:4000/packages/RoyalEvent/wedding/${weddingCity}`);
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
        };
        getEventData();
    }, [weddingCity]);
  
    useEffect(() => {
        const getOtherItemData = async () => {
            const reqOtheritemData = await fetch('http://localhost:4000/packages/wedding/otheritems');
            const respOtheritemData = await reqOtheritemData.json();
            setOtheritemData(respOtheritemData);
            console.log('data', respOtheritemData);
        };
        getOtherItemData();
    }, []);


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
            body: JSON.stringify({
            eventLoc: `${eventdata[0].location} ${eventdata[0].weddingCity}`,
            username: formData.username,
            mobileNo: formData.mobileNo,
            email: formData.email,
            bookingDate: formData.bookingDate,
            noOfGuests: formData.noOfGuests,
            eventTime: formData.eventTime,
            }),
          });
      
          if (response.status === 200) {
            console.log("Order submitted successfully.");
            window.location.href = '/Thanks';
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
                <Link to="/Home">Home</Link> <FontAwesomeIcon icon={faArrowRight} size="xs" style={{ color: "#000000" }} /> <Link to="/RoyalEvent">RoyalEvents</Link> <FontAwesomeIcon icon={faArrowRight} size="xs" style={{ color: "#000000" }} /><Link to="/RoyalEvent/Wedding">Wedding</Link>
            </div>

            <div className="container">
                {eventdata.map((event, index) => (
                    <div className="bookings-display" key={index}>
                        <div className="booking-display-img">
                            <img src={event.weddingImg} alt="" />
                        </div>
                        <div className="card-body">
                            <p className="card-text city-loc"><FontAwesomeIcon icon={faLocationDot} style={{ color: "#e4007d" }} /> {event.location}, {event.weddingCity}</p>
                            <h1 className="md-heading city-display">{event.weddingCity}</h1>
                            <p className="card-text card-text-desc">{event.weddingDesc}</p>
                            <p className="planning-fee">Price: <span className='price'><FontAwesomeIcon icon={faIndianRupeeSign} /> {event.price}</span></p>
                            <h3 className='md-heading'>About This Package:</h3>
                            <p className='card-text'>{event.aboutPackage}</p>
                        </div>
                    </div>
                ))}
                <form className="booking-form" onSubmit={handleSubmit}>
                    <h1 className='lg-heading'>"Dreamy Destination Weddings: Book Your Blissful Celebration Today!"</h1>
                    {eventdata.map((event, index) => (
                        <div key={index}>
                            <input type="text" name={`eventName-${index}`} id={`eventName-${index}`} value={`${event.location}, ${event.weddingCity}`} />
                        </div>
                    ))}
                    <input type="text" name="username" value={formData.username} onChange={handleInputChange} placeholder='Enter your FullName' />
                    <input type="number" name="mobileNo" value={formData.mobileNo} onChange={handleInputChange} placeholder='Enter your Mobile No' />
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder='Enter Your Email' />
                    <input type="date" name="bookingDate" value={formData.bookingDate} onChange={handleInputChange} />
                    <input type="number" name="noOfGuests" value={formData.noOfGuests} onChange={handleInputChange} placeholder='Enter NO of Guests' />
                    <p className='event-time'>Function Time</p>
                    <div className="function">
                        <input type="radio" name="eventTime" value="Day" onChange={handleInputChange} />
                        <label htmlFor="Day">Day</label>
                        <input type="radio" name="eventTime" value="Evening" onChange={handleInputChange} />
                        <label htmlFor="Evening">Evening</label>
                    </div>
                    <h1>Others</h1>
                    <div className="other-items">
                        {otheritemdata.map((event, index) => (
                            <div className="otherItem-show" key={index}>
                                <label className="card-text">{event.items}</label>
                                <FontAwesomeIcon icon={faIndianRupeeSign} style={{color: "#e4007d",}} /><p className="card-text">{event.prices}/-</p>
                                <input type="number" name="" id=""  />            
                               </div>
                        ))}
                    </div>
                    <button type='submit' className='submit-btn'>Book</button>
                </form>
            </div>
        </div>
    );
}
