import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign, faLocationDot, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function WeddingCity() {
    const { weddingCity } = useParams();
    const [eventdata, setEventData] = useState([]);
    const [formData, setFormData] = useState({
        eventLoc: "",
        username: "",
        mobileNo: "",
        email: "",
        bookingDate: "",
        noOfGuests: "",
        eventTime: "",
        Chairs: 0,
        Plates: 0,
        Tables: 0,
        LightSet: 0,
        Host: 0,
        BallonDeco: 0, // Uncomment this if you uncomment the related section in the form
        Godi: 0,
        Car: 0,
        Pandit: 0,
        PaperBlast: 0,
        FogMachine: 0,
        MicSound: 0,
        MicSoundScreen: 0,
        FlowerDeco: 0,
        photography: 0,
        
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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const calculateTotalCost = () => {
        const chairPrice = 100;
        const platesPrice = 4500;
        const tablesPrice = 200;
        const lightSetPrice = 2000;
        const host = 1;
        const godi = 1;
        const ballondeco = 1;
        const car = 1;
        const pandit = 1;
        const paperblast = 1;
        const fogMachine = 1;
        const MicSound = 1;
        const MicSoundScreen = 1;
        const FlowerDeco = 1;
        const photography = 1;

        const totalCost =
            formData.Chairs * chairPrice +
            formData.Plates * platesPrice +
            formData.Tables * tablesPrice +
            formData.LightSet * lightSetPrice +
            formData.Host * host +
            formData.Godi * godi +
            formData.BallonDeco * ballondeco +
            formData.Car * car +
            formData.Pandit * pandit +
            formData.PaperBlast * paperblast +
            formData.FogMachine * fogMachine +
            formData.MicSound * MicSound +
            formData.MicSoundScreen * MicSoundScreen +
            formData.FlowerDeco * FlowerDeco +
            formData.photography * photography

        return totalCost;
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        // Additional form validation can be added here

        try {
            const response = await fetch("/orders", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    eventLoc: `${eventdata[0].location} ${eventdata[0].weddingCity}`,
                    placePrice: eventdata[0].price,
                    username: formData.username,
                    mobileNo: formData.mobileNo,
                    email: formData.email,
                    bookingDate: formData.bookingDate,
                    noOfGuests: formData.noOfGuests,
                    eventTime: formData.eventTime,
                    Chairs: formData.Chairs,
                    Plates: formData.Plates,
                    Tables: formData.Tables,
                    LightSet: formData.LightSet,
                    Host: formData.Host,
                    BallonDeco: formData.BallonDeco,
                    Godi: formData.Godi,
                    Car: formData.Car,
                    Pandit: formData.Pandit,
                    PaperBlast: formData.PaperBlast,
                    FogMachine: formData.FogMachine,
                    MicSound: formData.MicSound,
                    MicSoundScreen: formData.MicSoundScreen,
                    FlowerDeco: formData.FlowerDeco,
                    photography: formData.photography,
                    totalCost: formData.totalCost
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
                {/* ... Existing form elements ... */}

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
                    <input type="number" name="noOfGuests" value={formData.noOfGuests} onChange={handleInputChange} placeholder='Enter No of Guests' />

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
                        <input type="radio" name="Host" value="0" onChange={handleInputChange} />
                        <label htmlFor="No">No</label>
                    </div>

                    <p className='event-time'>Do you need Godi? <span className="price">Price:20000</span></p>
                    <div className="function">
                        <input type="radio" name="Godi" value="20000" onChange={handleInputChange} />
                        <label htmlFor="Yes">Yes</label>
                        <input type="radio" name="Godi" value="0" onChange={handleInputChange} />
                        <label htmlFor="No">No</label>
                    </div>

                    <p className='event-time'>Do you need Rental Car for Baraat?(Audi a6) <span className="price">Price:10000</span></p>
                    <div className="function">
                        <input type="radio" name="Car" value="8000" onChange={handleInputChange} />
                        <label htmlFor="Yes">Yes</label>
                        <input type="radio" name="Car" value="0" onChange={handleInputChange} />
                        <label htmlFor="No">No</label>
                    </div>

                    <p className='event-time'>Do you need Pandit <span className="price">Price:50000</span></p>
                    <div className="function">
                        <input type="radio" name="Pandit" value="50000" onChange={handleInputChange} />
                        <label htmlFor="Yes">Yes</label>
                        <input type="radio" name="Pandit" value="0" onChange={handleInputChange} />
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
                        <input type="radio" name="MicSoundScreen" value="150000" onChange={handleInputChange} required />
                        <label htmlFor="Yes">Yes</label>
                        <input type="radio" name="MicSoundScreen" value="00" onChange={handleInputChange} />
                        <label htmlFor="No">No</label>
                    </div>

                    <p className='event-time'>Do you Need Flower Decoration? <span className="price">Price:100000</span></p>
                    <div className="function">
                        <input type="radio" name="FlowerDeco" value="100000" onChange={handleInputChange} />
                        <label htmlFor="Yes">Yes</label>
                        <input type="radio" name="FlowerDeco" value="00" onChange={handleInputChange} />
                        <label htmlFor="No">No</label>
                    </div>

                    <p className='event-time'>Do you Need Photo Grapher? <span className="price">Price:100000</span></p>
                    <div className="function">
                        <input type="radio" name="photography" value="200000" onChange={handleInputChange} />
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
                    </button>
                </form>
            </div>
        </div>
    );
}