import React, { useState, useEffect } from 'react';
import '../styles/styling.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign,faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function AnniversaryCity() {
    const { partyType } = useParams(); // Get the 'city' parameter from the route
    const [eventdata, setEventData] = useState([]);
    const [otheritemdata, setOtheritemData] = useState([]);

    useEffect(() => {
        const getEventData = async () => {
            const reqEventdata = await fetch(`http://localhost:4000/packages/RoyalEvent/birthdayParty/${partyType}`);
            const respEventData = await reqEventdata.json();
            setEventData(respEventData);
            console.log("data", respEventData);
        }
        getEventData();
    }, [partyType]); // Make sure to include 'city' in the dependency array

    useEffect(() => {
        const getOtherItemData = async () => {
          const reqOtheritemData = await fetch('http://localhost:4000/packages/wedding/otheritems');
          const respOtheritemData = await reqOtheritemData.json();
          setOtheritemData(respOtheritemData);
          console.log('data', respOtheritemData);
        };
        getOtherItemData();
      }, []);
    
    const [formData, setFormData] = useState({
        eventLoc: "",
        username: "",
        mobileNo: "",
        email: "",
        bookingDate: "",
        noOfGuests: "",
        eventTime: "",
        city:"",
        addresss:""
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
            body: JSON.stringify({
              eventLoc: eventdata[0].partyType, // Use event.placeTitle directly
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
    // Define selectedOption state and handleDropdownChange function
    const [selectedOption, setSelectedOption] = useState('');
    const handleDropdownChange = (e) => {
        setSelectedOption(e.target.value);
    };

    return (
       <>
            <div className='booking-pg'>
                <div className="linking-tags">
                    <Link to="/Home">Home</Link><FontAwesomeIcon icon={faArrowRight} size="xs" style={{color: "#000000",}} /><Link to="/RoyalEvent">RoyalEvents</Link> <FontAwesomeIcon icon={faArrowRight} size="xs" style={{color: "#000000",}} /><Link to="/RoyalEvent/birthdayparty">BirthdayParty</Link>
                </div>

                <div className="container">
                    {eventdata.map((event, index) => (
                        <div className="bookings-display" key={index}>
                            <div className="booking-display-img">
                                <img src={event.partyDeco} alt="" />
                            </div>
                            <div className="card-body">
                                <p className="card-text city-loc">{event.partyType}</p>
                                <p className="card-text card-text-desc">{event.partyType}</p>
                                <p className="planning-fee">Price: <span className='price'><FontAwesomeIcon icon={faIndianRupeeSign} /> {event.partyPrice}</span></p>
                                <h3 className='md-heading'>About This Package:</h3>
                                <p className='card-text'>{event.aboutPackage}</p>
                            </div>
                        </div>
                    ))}
                    <form action="" className="booking-form" onSubmit={handleSubmit}>
                    <h1 className='lg-heading'>"Make your birthday unforgettable with us! Celebrate in style and book your perfect party now."</h1>
                    {/* <h1>This is the form</h1> */}

                    {eventdata.map((event, index) => (
                        <div key={index}>
                            <input type="text" name={`eventName-${index}`} id={`eventName-${index}`} value={`${event.partyType}`} />

                        </div>
                    ))}
                    <input type="text" name="username" value={formData.username} onChange={handleInputChange} placeholder='Enter your Name'/>
                    <input type="number" name="mobileNo" value={formData.mobileNo} onChange={handleInputChange} placeholder='Enter your Mobile No' />
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder='Enter Your Email'/>
                    <input type="date" name="bookingDate" value={formData.bookingDate} onChange={handleInputChange} />
                    <input type="number" name="noOfGuests" value={formData.noOfGuests} onChange={handleInputChange} placeholder='Enter NO of  Guests' />
                    <label htmlFor="dropdown ">Select City:</label>
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
                    <div className="other-items">
                        {otheritemdata.map((event, index) => (
                            <div className="otherItem-show" key={index}>
                                <input type="checkbox" name="" id="" />
                                <p className="card-text">{event.items}</p>
                                <FontAwesomeIcon icon={faIndianRupeeSign} style={{color: "#e4007d",}} /><p className="card-text">{event.prices}/-</p>
                            </div>
                        ))}
                    </div>
                    <button type='submit' className='submit-btn'>Book</button>
                </form>
                </div>
            </div>   
        </>
                )
}