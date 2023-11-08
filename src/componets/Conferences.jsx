import React from 'react'
import '../styles/styling.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';


export default function Award(){
  const [eventdata, setEventData] = useState([]);
  const [otheritemdata, setOtheritemData] = useState([]);
  // const [formData, setFormData] = useState([]);

  useEffect(() => {
    const getEventData = async () => {
        const reqEventdata = await fetch('http://localhost:4000/packages/RoyalEvent/conferences');
        const respEventData = await reqEventdata.json();
        setEventData(respEventData);
        console.log("data", respEventData)
    }
    getEventData();
}, []);

useEffect(() => {
    const getOtherItemData = async () => {
      const reqOtheritemData = await fetch('http://localhost:4000/packages/wedding/otheritems');
      const respOtheritemData = await reqOtheritemData.json();
      setOtheritemData(respOtheritemData);
      console.log('data', respOtheritemData);
    };
    getOtherItemData();
  }, [])
  
const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormData({
      ...formData,
      [name]: value,
  });
};
const [formData, setFormData] = useState({
  eventLoc: "",
  username: "",
  mobileNo: "",
  email: "",
  bookingDate: "",
  noOfGuests: "",
  eventTime: "",
  city:"",
  addresss:"",
});

const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          eventLoc: eventdata[0].eventTitle, // Use event.placeTitle directly
          username: formData.username,
          mobileNo: formData.mobileNo,
          email: formData.email,
          bookingDate: formData.bookingDate,
          noOfGuests: formData.noOfGuests,
          eventTime: formData.eventTime,
          city: selectedOption,
          addresss: formData.addresss,
        }),
      });
  
      if (response.status === 200) {
        console.log("Order submitted successfully.");
        // Redirect to another page (e.g., '/Thanks')
        window.location.href = '/Thanks';
      } else {
        console.error("Order submission failed.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
    
const handleDropdownChange = (e) => {
    setSelectedOption(e.target.value);
};
const [selectedOption, setSelectedOption] = useState("");

  return (
    <div className='booking-pg'>
    <div className="linking-tags">
        <Link to="/Home">Home </Link> <FontAwesomeIcon icon={faArrowRight} size="xs" style={{ color: "#000000", }} /> <Link to="/RoyalEvent">RoyalEvents</Link> <FontAwesomeIcon icon={faArrowRight} size="xs" style={{ color: "#000000", }} /><Link to="/RoyalEvent/Conferences">Conferences</Link>
    </div>
    <h1 className="lg-heading wed-heads">"Dazzling Stars: A Night of Excellence and Achievement".</h1>
    <div className="container">
                {eventdata.map((event, index) => (
                    <div className="bookings-display" key={index}>
                        <div className="booking-display-img">
                            <img src={event.eventImg} alt="" />
                        </div>
                        <div className="card-body">
                            <p className="card-text city-loc">{event.eventTitle}</p>
                            <p className="card-text card-text-desc">{event.eventDesc}</p>
                            <p className="planning-fee">Price: <span className='price'><FontAwesomeIcon icon={faIndianRupeeSign} /> {event.price}</span></p>
                            <h3 className='md-heading'>About This Package:</h3>
                            <p className="card-text card-text-desc">{event.aboutPackage}</p>
                        </div>
                    </div>
                ))} 
                <form action="" className="booking-form additional-info" onSubmit={handleSubmit}>

                {eventdata.map((event, index) => (
                    <div key={index}>
                        <input type="text" name={`eventName-${index}`} id={`eventName-${index}`} value={`${event.eventTitle}`} />

                    </div>
                ))}
                <input type="text" name="username" value={formData.username} onChange={handleInputChange} placeholder='Enter your Name' />
                <input type="number" name="mobileNo" value={formData.mobileNo} onChange={handleInputChange} placeholder='Enter your Mobile No' />
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder='Enter Your Email' />

                <input type="date" name="bookingDate" value={formData.bookingDate} onChange={handleInputChange} />

                <input type="number" name="noOfGuests" value={formData.noOfGuests} onChange={handleInputChange} placeholder='Enter No of  Guests' />

                <label htmlFor="dropdown">Select City:</label>

                <select id="dropdown" value={selectedOption} onChange={handleDropdownChange}>
                <option name="city" value="Mumbai" onChange={handleInputChange}>Mumbai</option>
                            <option name="city" value="Pune" onChange={handleInputChange}>Pune</option>
                            <option name="city" value="Bangalore" onChange={handleInputChange}>Bangalore</option>
                            <option name="city" value="Jaipur" onChange={handleInputChange}>Jaipur</option>
                            <option name="city" value="Delhi" onChange={handleInputChange}>Delhi</option>
                            <option name="city" value="Chennai" onChange={handleInputChange}>Chennai</option>
                            <option name="city" value="Agra" onChange={handleInputChange}>Agra</option>
                            <option name="city" value="Raipur" onChange={handleInputChange}>Raipur</option>
                            <option name="city" value="Kota" onChange={handleInputChange}>Kota</option>
                            <option name="city" value="Surat" onChange={handleInputChange}>Surat</option>
                            <option name="city" value="Kolkata" onChange={handleInputChange}>Kolkata</option>
                            <option name="city" value="Hydrabad" onChange={handleInputChange}>Hydrabad</option>
                        </select>

                <input type="text" name="addresss" value={formData.addresss} onChange={handleInputChange} placeholder='Enter Your Address' />
                <p className='event-time'>Function Time</p>
                <div className="function">
                    <input type="radio" name="eventTime" value="Day" onChange={handleInputChange} />
                    <label htmlFor="Day">Day</label>
                    <input type="radio" name="eventTime" value="Evening" onChange={handleInputChange} />
                    <label htmlFor="Evening">Evening</label>
                </div>
                <h1>Others</h1> 
                
                <button type='submit' className='submit-btn'>Book</button>
            </form>
        </div>
    </div>
)
}