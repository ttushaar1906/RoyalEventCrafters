import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Admi() {
  const [billData, setBillData] = useState([]);
  const { username } = useParams();

  useEffect(() => {
    const getBillData = async () => {
      try {
        const reqBilldata = await fetch(`http://localhost:4000/packages/RoyalEvent/Admi`);
        if (reqBilldata.ok) {
          const respBillData = await reqBilldata.json();
          setBillData(respBillData);
          console.log("data", respBillData);
        } else {
          console.error("Error fetching event data");
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getBillData();
  }, [username]);

  return (
    <>
      <nav className="nav-section admi">
        <div className="container">
          <div className="logo">
            <img src="https://i.postimg.cc/BbL9q4cc/logo.png" alt="" />
          </div>
          <div className="lg-heading">
            Up Coming Orders
          </div>
        </div>
      </nav>

      <div className="container">
        <div className="dashboard-events">
          <table className="dashboard-table">
            <thead>
              <tr className="table-row">
                <th className="table-head">
                  Event Name
                </th>
                <th className="table-head">
                 User Name
                </th>
                <th className="table-head">
                  Mobile No
                </th>
                <th className="table-head">
                  Date
                </th>
                <th className="table-head">
                  No of Guests
                </th>
                <th className="table-head">
                Address and city
                </th>
                <th className="table-head">
                Total
                </th>
              </tr>
            </thead>
            <tbody>
              {billData.map((event, index) => (
                <tr key={index} className="table-row">
                  <td>
                    <div className="eventLoc-col">{event.eventLoc}</div>
                  </td>
                  <td>
                  <div className="">{event.username}</div>
                  </td>
                  <td>
                  <div className="">{event.mobileNo}</div>
                  </td>
                  <td>
                  <div className="">{event.bookingDate}</div>
                  </td>
                  <td>
                  <div className="">{event.noOfGuests}</div>
                  </td>
                  <td>
                  <div className="">{event.addresss}, {event.city}</div>
                  </td>
                  <td>
                  <div className="">{/* total price */}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Link to="/Home"><button className="btn admi-btn">Home</button></Link>
    </>
  );
}
