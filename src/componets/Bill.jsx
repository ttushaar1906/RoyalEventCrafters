import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";

export default function Bill() {
  const [eventdata, setEventData] = useState([]);

  useEffect(() => {
    const getEventData = async () => {
      try {
        const reqEventdata = await fetch('http://localhost:4000/Bill');
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
  }, []);

  return (
    <>
    <h1>This Billing Pg</h1>
      <div className="container">
        {eventdata.map((event, index) => (
          <div className="bookings-display" key={index}>
            <div className="card-body">
              <p className="card-text city-loc">{event.placePrice}</p>
              {/* <p className="card-text card-text-desc">{event.eventDesc}</p>
              <p className="planning-fee">
                Price: <span className='price'><FontAwesomeIcon icon={faIndianRupeeSign} /> {event.price}</span>
              </p>
              <h3 className='md-heading'>About This Package:</h3>
              <p className="card-text card-text-desc">{event.aboutPackage}</p> */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
