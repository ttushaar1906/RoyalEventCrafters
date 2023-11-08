import React, { useState, useEffect } from 'react';
import '../styles/styling.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function AnniversaryCity() {
    const { placeTitle } = useParams(); // Get the 'city' parameter from the route
    const [eventdata, setEventData] = useState([]);
    const [otheritemdata, setOtheritemData] = useState([]);

    useEffect(() => {
        const getEventData = async () => {
            const reqEventdata = await fetch(`http://localhost:4000/packages/RoyalEvent/anniversary/${placeTitle}`);
            const respEventData = await reqEventdata.json();
            setEventData(respEventData);
            console.log("data", respEventData);
        }
        getEventData();
    }, [placeTitle]);

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
        city: "",
        addresss: "",
        Host: "",
        PaperBlast: "",
        FogMachine: "",
        MicSound: "",
        MicSoundScreen: "",
        Chairs: "",
        Plates: "",
        Tables: "",
        LightSet: "",
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
                    eventLoc: eventdata[0].placeTitle,
                    username: formData.username,
                    mobileNo: formData.mobileNo,
                    email: formData.email,
                    bookingDate: formData.bookingDate,
                    noOfGuests: formData.noOfGuests,
                    eventTime: formData.eventTime,
                    city: formData.city, // Use formData.city instead of selectedOption
                    addresss: formData.addresss,
                    Host: formData.Host,
                    PaperBlast: formData.PaperBlast,
                    FogMachine: formData.FogMachine,
                    MicSound: formData.MicSound,
                    MicSoundScreen: formData.MicSoundScreen,
                    Chairs: formData.Chairs,
                    Plates: formData.Plates,
                    Tables: formData.Tables,
                    LightSet: formData.LightSet,
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
        setFormData({
            ...formData,
            city: e.target.value,
        });
    };

    return (
        <>
            <div className='booking-pg'>
                <div className="linking-tags">
                    <Link to="/Home">Home</Link><FontAwesomeIcon icon={faArrowRight} size="xs" style={{ color: "#000000", }} /><Link to="/RoyalEvent">RoyalEvents</Link> <FontAwesomeIcon icon={faArrowRight} size="xs" style={{ color: "#000000", }} /><Link to="/RoyalEvent/Anniversary">Anniversary</Link>
                </div>

                <div className="container">
                    {eventdata.map((event, index) => (
                        <div className="bookings-display" key={index}>
                            <div className="booking-display-img">
                                <img src={event.decoImg} alt="" />
                            </div>
                            <div className="card-body">
                                <p className="card-text city-loc">{event.placeTitle}</p>
                                <p className="card-text card-text-desc">{event.decodesc}</p>
                                <p className="planning-fee">Price: <span className='price'><FontAwesomeIcon icon={faIndianRupeeSign} /> {event.price}</span></p>
                                <h3 className='md-heading'>About This Package:</h3>
                                <p className='card-text'>{event.aboutPackage}</p>
                            </div>
                        </div>
                    ))}
                    <form action="" className="booking-form" onSubmit={handleSubmit}>
                        <h1 className='lg-heading'>"Create unforgettable memories on your special day!"</h1>
                        {eventdata.map((event, index) => (
                            <div key={index}>
                                <input type="text" name={`eventName-${index}`} id={`eventName-${index}`} value={`${event.placeTitle}`} />
                            </div>
                        ))}
                        <input type="text" name="username" value={formData.username} onChange={handleInputChange} placeholder='Enter your Name' />
                        <input type="number" name="mobileNo" value={formData.mobileNo} onChange={handleInputChange} placeholder='Enter your Mobile No' />
                        <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder='Enter Your Email' />
                        <input type="date" name="bookingDate" value={formData.bookingDate} onChange={handleInputChange} />
                        <input type="number" name="noOfGuests" value={formData.noOfGuests} onChange={handleInputChange} placeholder='Enter NO of Guests' />
                        <label htmlFor="dropdown">Select City:</label>
                        <select id="dropdown" value={selectedOption} onChange={handleDropdownChange}>
                            <option name="city" value="Mumbai">Mumbai</option>
                            <option name="city" value="Pune">Pune</option>
                            <option name="city" value="Bangalore">Bangalore</option>
                            <option name="city" value="Jaipur">Jaipur</option>
                            <option name="city" value="Delhi">Delhi</option>
                            <option name="city" value="Chennai">Chennai</option>
                            <option name="city" value="Agra">Agra</option>
                            <option name="city" value="Raipur">Raipur</option>
                            <option name="city" value="Kota">Kota</option>
                            <option name="city" value="Surat">Surat</option>
                            <option name="city" value="Kolkata">Kolkata</option>
                            <option name="city" value="Hydrabad">Hydrabad</option>
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
                        <p className='event-time'>Do you need Host? <span className="price">Price:200000</span></p>
                        <div className="function">
                            <input type="radio" name="Host" value="Yes" onChange={handleInputChange} />
                            <label htmlFor="Yes">Yes</label>
                            <input type="radio" name="Host" value="No" onChange={handleInputChange} />
                            <label htmlFor="No">No</label>
                        </div>
                        <p className='event-time'>Do you need Paper Blast? <span className="price">Price:50000</span></p>
                        <div className="function">
                            <input type="radio" name="PaperBlast" value="Yes" onChange={handleInputChange} />
                            <label htmlFor="Yes">Yes</label>
                            <input type="radio" name="PaperBlast" value="No" onChange={handleInputChange} />
                            <label htmlFor="No">No</label>
                        </div>
                        <p className='event-time'>Do you need Fog Machine? <span className="price">Price:50000</span></p>
                        <div className="function">
                            <input type="radio" name="FogMachine" value="Yes" onChange={handleInputChange} />
                            <label htmlFor="Yes">Yes</label>
                            <input type="radio" name="FogMachine" value="No" onChange={handleInputChange} />
                            <label htmlFor="No">No</label>
                        </div>
                        <p className='event-time'>Do you Need Mic and Sound System? <span className="price">Price:150000</span></p>
                        <div className="function">
                            <input type="radio" name="MicSound" value="Yes" onChange={handleInputChange} />
                            <label htmlFor="Yes">Yes</label>
                            <input type="radio" name="MicSound" value="No" onChange={handleInputChange} />
                            <label htmlFor="No">No</label>
                        </div>
                        <p className='event-time'>Do you Need Mic Sound and Screen System? <span className="price">Price:150000</span></p>
                        <div className="function">
                            <input type="radio" name="MicSoundScreen" value="Yes" onChange={handleInputChange} />
                            <label htmlFor="Yes">Yes</label>
                            <input type="radio" name="MicSoundScreen" value="No" onChange={handleInputChange} />
                            <label htmlFor="No">No</label>
                        </div>
                        <p className='event-time'>Enter No of Extra Chairs You Need <span className="price">Price:100/-</span></p>
                        <input type="number" name="Chairs" value={formData.Chairs} onChange={handleInputChange} placeholder='Enter No of Chairs' />
                        <p className='event-time'>Enter No of Extra Plates You Need <span className="price">Price:4500/-</span></p>
                        <input type="number" name="Plates" value={formData.Plates} onChange={handleInputChange} placeholder='Enter No of Plates' />
                        <p className='event-time'>Enter No of Extra Tables You Need <span className="price">Price:200/-</span></p>
                        <input type="number" name="Tables" value={formData.Tables} onChange={handleInputChange} placeholder='Enter No of Tables' />
                        <p className='event-time'>Enter No of Extra Lights (set of 4) <span className="price">Price:2000/-</span></p>
                        <input type="number" name="LightSet" value={formData.LightSet} onChange={handleInputChange} placeholder='Enter No of LightSet' />
                        <button type='submit' className='submit-btn'>Book</button>
                    </form>
                </div>
            </div>
        </>
    )
}
