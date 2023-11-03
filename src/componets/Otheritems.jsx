import React, { useState, useEffect } from 'react';
import '../styles/styling.css';

export default function OtherItems() {
  const [otheritemdata, setOtheritemData] = useState([]);

  useEffect(() => {
    const getOtherItemData = async () => {
      const reqOtheritemData = await fetch('http://localhost:4000/packages/wedding/otheritems');
      const respOtheritemData = await reqOtheritemData.json();
      setOtheritemData(respOtheritemData);
      console.log('data', respOtheritemData);
    };
    getOtherItemData();
  }, []);

  return (
    <>
      {otheritemdata.map((event, index) => (
        <div className="" key={index}>  
            <p className="card-text">{event.items}</p>
            <p className="card-text">{event.prices}</p>
        </div>
      ))}
    </>
  );
}
