import React, { useState, useEffect } from 'react';
import '../styles/styling.css';

export default function Wedding() {
    const [eventdata, setEventData] = useState([]);

    useEffect(() => {
        const getEventData = async () => {
            const reqEventdata = await fetch('http://localhost:3000/packages/wedding');
            const respEventData = await reqEventdata.json();
            setEventData(respEventData);
        }

        getEventData();
    }, []);

    return (
        <>
            <h1 className="lg-heading">Elevate your wedding with our royal touch.</h1>
            <div className="container">
                {eventdata.map((event, index) => (
                    <div className="card-events" key={index}>
                        <div className="card-img">
                            <img src='https://shorturl.at/gENVY' alt="" />
                        </div>
                        <div className="card-body">
                            <h5 className="md-heading">{event.weddingCity}</h5>
                            <p className="card-text">{event.weddingDesc}</p>
                            <p className="price">Price: {event.price}</p>
                            {/* Add your button here */}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
