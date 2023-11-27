import React from 'react'
import '../styles/styling.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';


export default function Award() {
    const [eventdata, setEventData] = useState([]);
    const [eventPrice, setEventPrice] = useState(0);

    const [selectedOption, setSelectedOption] = useState("");

    const handleDropdownChange = (e) => {
        setSelectedOption(e.target.value);
    };
    
    useEffect(() => {
        const getEventData = async () => {
            const reqEventdata = await fetch('http://localhost:4000/packages/RoyalEvent/pressconferences');
            const respEventData = await reqEventdata.json();
            setEventData(respEventData);
            setEventPrice(respEventData[0].price);
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
        eventTitle: "",
        username: "",
        mobileNo: "",
        email: "",
        bookingDate: "",
        noOfGuests: "",
        eventTime: "",
        city: "",
        addresss: "",
        Chairs: 0,
        Plates: 0,
        Tables: 0,
        LightSet: 0,
        Host: 0,
        PaperBlast: 0,
        FogMachine: 0,
        MicSound: 0,
        MicSoundScreen: 0,
        photography: 0,
        totalCost: 0
    });

    const calculateTotalCost = () => {
        const chairPrice = 100;
        const platesPrice = 4500;
        const tablesPrice = 200;
        const lightSetPrice = 2000;
        const host = 1;
        const paperblast = 1;
        const fogMachine = 1;
        const MicSound = 1;
        const MicSoundScreen = 1;
        const photography = 1;

        let totalCost =
            (formData.Chairs * chairPrice) +
            (formData.Plates * platesPrice) +
            (formData.Tables * tablesPrice) +
            (formData.LightSet * lightSetPrice) +
            (formData.Host * host) +
            (formData.PaperBlast * paperblast) +
            (formData.FogMachine * fogMachine) +
            (formData.MicSound * MicSound) +
            (formData.MicSoundScreen * MicSoundScreen) +
            (formData.photography * photography) +
            eventPrice

        return totalCost;
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
                    eventLoc: `${eventdata[0].eventTitle}`,
                    placePrice: eventdata[0].price,
                    username: formData.username,
                    mobileNo: formData.mobileNo,
                    email: formData.email,
                    bookingDate: formData.bookingDate,
                    noOfGuests: formData.noOfGuests,
                    eventTime: formData.eventTime,
                    city: formData.city,
                    addresss: formData.addresss,
                    Chairs: formData.Chairs,
                    Plates: formData.Plates,
                    Tables: formData.Tables,
                    LightSet: formData.LightSet,
                    Host: formData.Host,
                    PaperBlast: formData.PaperBlast,
                    FogMachine: formData.FogMachine,
                    MicSound: formData.MicSound,
                    MicSoundScreen: formData.MicSoundScreen,
                    photography: formData.photography,
                    totalCost: calculateTotalCost()
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


    return (
        <div className='booking-pg'>
            <div className="linking-tags">
                <Link to="/Home">Home </Link> <FontAwesomeIcon icon={faArrowRight} size="xs" style={{ color: "#000000", }} /> <Link to="/RoyalEvent">RoyalEvents</Link> <FontAwesomeIcon icon={faArrowRight} size="xs" style={{ color: "#000000", }} /><Link to="/RoyalEvent/Wedding">Award Ceremony</Link>
            </div>
            <h1 className="lg-heading wed-heads">"Stay informed, stay ahead. Join us at our press conference for the latest updates.".</h1>
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
                        <option value="">Select a City</option>
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
                        <option value="Hyderabad">Hyderabad</option>
                    </select>


                    <input type="text" name="addresss" value={formData.addresss} onChange={handleInputChange} placeholder='Enter Your Address' />
                    <p className='event-time'>Function Time</p>
                    <div className="function">
                        <input type="radio" name="eventTime" value="Day" onChange={handleInputChange} required />
                        <label htmlFor="Day">Day</label>
                        <input type="radio" name="eventTime" value="Evening" onChange={handleInputChange} />
                        <label htmlFor="Evening">Evening</label>
                    </div>
                    {eventdata.map((event, index) => (
                        <div key={index}>
                            <input type="number" name={`eventName-${index}`} id={`eventName-${index}`} value={`${event.price}`} />
                        </div>
                    ))}
                    <h1>Others</h1>
                    <p className='event-time'>Do you need Host? <span className="price">Price:200000</span></p>
                    <div className="function">
                        <input type="radio" name="Host" value="200000" onChange={handleInputChange} required />
                        <label htmlFor="Yes">Yes</label>
                        <input type="radio" name="Host" value="00" onChange={handleInputChange} />
                        <label htmlFor="No">No</label>
                    </div>

                    <p className='event-time'>Do you need Paper Blast? <span className="price">Price:50000</span></p>
                    <div className="function">
                        <input type="radio" name="PaperBlast" value="50000" onChange={handleInputChange} required />
                        <label htmlFor="Yes">Yes</label>
                        <input type="radio" name="PaperBlast" value="00" onChange={handleInputChange} />
                        <label htmlFor="No">No</label>
                    </div>

                    <p className='event-time'>Do you need Fog Machine? <span className="price">Price:50000</span></p>
                    <div className="function">
                        <input type="radio" name="FogMachine" value="50000" onChange={handleInputChange} required />
                        <label htmlFor="Yes">Yes</label>
                        <input type="radio" name="FogMachine" value="00" onChange={handleInputChange} />
                        <label htmlFor="No">No</label>
                    </div>

                    <p className='event-time'>Do you Need Mic and Sound System? <span className="price">Price:150000</span></p>
                    <div className="function">
                        <input type="radio" name="MicSound" value="150000" onChange={handleInputChange} required />
                        <label htmlFor="Yes">Yes</label>
                        <input type="radio" name="MicSound" value="00" onChange={handleInputChange} />
                        <label htmlFor="No">No</label>
                    </div>

                    <p className='event-time'>Do you Need Mic Sound and Screen System? <span className="price">Price:150000</span></p>
                    <div className="function">
                        <input type="radio" name="MicSoundScreen" value="150000" onChange={handleInputChange} />
                        <label htmlFor="Yes">Yes</label>
                        <input type="radio" name="MicSoundScreen" value="00" onChange={handleInputChange} />
                        <label htmlFor="No">No</label>
                    </div>

                    <p className='event-time'>Do you Need Photographer? <span className="price">Price:200000</span></p>
                    <div className="function">
                        <input type="radio" name="photography" value="200000" onChange={handleInputChange} required />
                        <label htmlFor="Yes">Yes</label>
                        <input type="radio" name="photography" value="00" onChange={handleInputChange} />
                        <label htmlFor="No">No</label>
                    </div>

                    <p className='event-time'>
                        Enter No of Extra Chairs You Need <span className="price">Price:100/-</span>
                    </p>
                    <input
                        type="number"
                        name="Chairs"
                        value={formData.Chairs}
                        onChange={handleInputChange}
                        placeholder='Enter No of Chairs'
                    />

                    <p className='event-time'>
                        Enter No of Extra Plates You Need <span className="price">Price:4500/-</span>
                    </p>
                    <input
                        type="number"
                        name="Plates"
                        value={formData.Plates}
                        onChange={handleInputChange}
                        placeholder='Enter No of Plates'
                    />

                    <p className='event-time'>
                        Enter No of Extra Tables You Need <span className="price">Price:200/-</span>
                    </p>
                    <input
                        type="number"
                        name="Tables"
                        value={formData.Tables}
                        onChange={handleInputChange}
                        placeholder='Enter No of Tables'
                    />

                    <p className='event-time'>
                        Enter No of Extra Lights (set of 4) <span className="price">Price:2000/-</span>
                    </p>
                    <input
                        type="number"
                        name="LightSet"
                        value={formData.LightSet}
                        onChange={handleInputChange}
                        placeholder='Enter No of LightSet'
                    />

                    <p>Total Cost: {calculateTotalCost()} /-</p>
                    <input
                        type="number"
                        name="totalCost"
                        value={formData.totalCost}
                        readOnly // make it read-only to display the value
                        style={{ display: 'none' }} // hide it from the user
                    />
                    <button type='submit' className='submit-btn'>
                        Book
                    </button> </form>
            </div>
        </div>
    )
}