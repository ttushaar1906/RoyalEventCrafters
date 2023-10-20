import React, { useState, useEffect } from 'react';
import '../styles/styling.css';

export default function UdaipurWedding() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Define your condition here
    const condition = 'UdaipurWedding';

    fetch(`/wedding?condition=${condition}`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
      <div className="bg">
        <img src="https://shorturl.at/crO36" alt="Bg-udaipur" />
      </div>
      <div className="container">
        {/* Render your content here */}
      </div>

      <div className="about-event">
        {data.map((item, index) => (
          <div className="card-events" key={index}>
            {/* Card content */}
            <div className="card-img">
              <img src={item.weddingImg} alt="" />
            </div>
            {/* Other card elements go here */}
          </div>
        ))}
      </div>

      <div className="event-book">
        {/* Render event booking content here */}
      </div>
    </>
  );
}
