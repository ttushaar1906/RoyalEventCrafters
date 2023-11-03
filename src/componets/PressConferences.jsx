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
  const [selectedOption, setSelectedOption] = useState("");
  const handleDropdownChange = (e) => {
      setSelectedOption(e.target.value);
    };
  useEffect(() => {
    const getEventData = async () => {
        const reqEventdata = await fetch('http://localhost:4000/packages/RoyalEvent/pressconferences');
        const respEventData = await reqEventdata.json();
        setEventData(respEventData);
        console.log("data", respEventData)
    }
    getEventData();
}, []);

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
  return (
    <div className='booking-pg'>
    <div className="linking-tags">
        <Link to="/Home">Home </Link> <FontAwesomeIcon icon={faArrowRight} size="xs" style={{ color: "#000000", }} /> <Link to="/RoyalEvent">RoyalEvents</Link> <FontAwesomeIcon icon={faArrowRight} size="xs" style={{ color: "#000000", }} /><Link to="/RoyalEvent/Wedding">Award Ceremony</Link>
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

                <select id="dropdown" value={formData.selectedOption} onChange={handleDropdownChange}>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Pune">Pune</option>
                    <option value="Bangalore">Bangalore</option>
                    <option value="Jaipur">Jaipur</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Agra">Agra</option>
                    <option value="Raipur">Raipur</option>
                    <option value="Kota">Kota</option>
                    <option value="Surat">Surat</option>
                    <option value="Kolkata">Kolkata</option>
                    <option value="Hydrabad">Hydrabad</option>
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
                                <button className='incDec-btn' onClick={() => decreaseCount(index)} disabled={!item.checked}>-</button>
                                {item.count}
                                <button className='incDec-btn' onClick={() => increaseCount(index)} disabled={!item.checked}>+</button>
                            </div>
                        </div>
                    ))}
                </div>
                <button type='submit' className='submit-btn'>Book</button>
            </form>
        </div>
    </div>
)
}