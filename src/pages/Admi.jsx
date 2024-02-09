import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Admi() {
  const [billData, setBillData] = useState([]);
  const [contactus, setContactus] = useState([]);
  const { username } = useParams();
  const [feedbackData , setFeedbackData] = useState([]);

// Bill
  useEffect(() => {
    const getBillData = async () => {
      try {
        const reqBilldata = await fetch(`http://localhost:4000/packages/RoyalEvent/Admi`);
        if (reqBilldata.ok) {
          const respBillData = await reqBilldata.json();
          setBillData(respBillData);
          console.log("Bill data", respBillData);
        } else {
          console.error("Error fetching bill data");
        }
      } catch (error) {
        console.error('Error fetching bill data:', error);
      }
    };

    getBillData();
  }, [username]);

//   Contact Us
  useEffect(() => {
    const getContactus = async () => {
      try {
        const reqContactus = await fetch('http://localhost:4000/packages/RoyalEvent/Admi/contact');
        if (reqContactus.ok) {
          const respContactus = await reqContactus.json();
          setContactus(respContactus);
          console.log("Contactus data", respContactus);
        } else {
          console.error("Error fetching contactus data");
        }
      } catch (error) {
        console.error('Error fetching contactus data:', error);
      }
    };

    getContactus();
  }, []);

//   Feedback
useEffect(() => {
    const getFeedbackData = async () => {
      try {
        const reqFeedbackData = await fetch(`http://localhost:4000/packages/RoyalEvent/Admi/review`);
        if (reqFeedbackData.ok) {
          const respFeedbackData = await reqFeedbackData.json();
          setFeedbackData(respFeedbackData);
          console.log("Feedback data", respFeedbackData);
        } else {
          console.error("Error fetching bill data");
        }
      } catch (error) {
        console.error('Error fetching bill data:', error);
      }
    };

    getFeedbackData();
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

{/* Orders List */}
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
                  <div className="">{event.totalCost }</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

{/* Contact Us List */}
<h1 className="lg-heading">
    Feedbacks
</h1>
      <div className="container">
        <div className="dashboard-events">
          <table className="dashboard-table">
            <thead>
              <tr className="table-row">
                <th className="table-head">
                  User Name
                </th>
                <th className="table-head">
                 Email Address
                </th>
                <th className="table-head">
                  Mobile No
                </th>
                <th className="table-head">
                 Message
                </th>
              </tr>
            </thead>
            <tbody>
              {contactus.map((event, index) => (
                <tr key={index} className="table-row">
                  <td>
                    <div className="eventLoc-col">{event.name}</div>
                  </td>
                  <td>
                  <div className="">{event.email}</div>
                  </td>
                  <td>
                  <div className="">{event.mobileNO}</div>
                  </td>
                  <td>
                  <div className="">{event.message}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

{/* Feedback List */}
<h1 className="lg-heading">
    Contact Us
</h1>
<div className="container">
        <div className="dashboard-events">
          <table className="dashboard-table">
            <thead>
              <tr className="table-row">
                <th className="table-head">
                  User Name
                </th>
                <th className="table-head">
                 User Email Address
                </th>
                <th className="table-head">
                  Mobile No
                </th>
                <th className="table-head">
                 Rating
                </th>
                <th className="table-head">
                 Message
                </th>
              </tr>
            </thead>
            <tbody>

              {feedbackData.map((event, index) => (
                <tr key={index} className="table-row">
                  <td>
                    <div className="eventLoc-col">{event.name}</div>
                  </td>
                  <td>
                  <div className="">{event.email}</div>
                  </td>
                  <td>
                  <div className="">{event.user_mobileno}</div>
                  </td>
                  <td>
                  <div className="">{event.rating}</div>
                  </td>
                  <td>
                  <div className="contant-col">{event.message}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Link to="/"><button className="btn admi-btn">Logout</button></Link>
    </>
  );
}
