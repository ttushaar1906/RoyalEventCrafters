import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
import { useParams } from 'react-router-dom';

export default function Bill() {
  const [billData, setBillData] = useState([]);
  const { eventLoc } = useParams();

  useEffect(() => {
    const getBillData = async () => {
      try {
        if (eventLoc) {
          const reqBilldata = await fetch(`http://localhost:4000/packages/RoyalEvent/Bill/${eventLoc}`);
          if (reqBilldata.ok) {
            const respBillData = await reqBilldata.json();
            setBillData(respBillData);
            console.log("data", respBillData);
          } else {
            console.error("Error fetching event data");
          }
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getBillData();
  }, [eventLoc]);

  return (
    <>
      <h1>This Billing Pg</h1>
      <div className="container">
        {billData.map((event, index) => (
          <div className="card-events" key={index}>
            <div className="card-img">
              {event.eventLoc}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
