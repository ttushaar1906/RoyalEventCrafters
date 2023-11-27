import React, { useEffect, useState } from "react";
import axios from "axios";
import '../styles/styling.css';
import { useLocation } from "react-router-dom";

export default function Dashboard() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const [userEmail, setUserEmail] = useState()
    
    const [orderDetails, setOrderDetails] = useState([]);

    useEffect(()=>{
        const email = searchParams.get("email");
        setUserEmail(email)
    },[])

    useEffect(() => {
        const getOrderDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/packages/orderDetails?email=${userEmail}`);

                // Check if the response is successful
                if (response.status === 200) {
                    setOrderDetails(response.data);
                    console.log("data", response.data);
                } else {
                    console.error("Failed to fetch data. Status:", response.status);
                }
            } catch (error) {
                console.error("Error fetching order details:", error);
            }
        };

        getOrderDetails();
    }, [userEmail]);

    return (
        <>
            <div className="dashboard-details container">
                <div className="user_name">
                    <p>Email: {userEmail}</p>
                </div>
                <div className="dashboard-events">
                    <table className="dashboard-table">
                        <thead>
                            <tr className="table-row">
                                <th className="table-head">
                                    Event Name / Event Location
                                </th>
                                <th className="table-head">
                                    Booked For
                                </th>
                                <th className="table-head">
                                    Total Bill
                                </th>
                                <th className="table-head">
                                    Status
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {orderDetails && orderDetails.map((event, index) => (
                                <tr key={index}>
                                    <td>{event.eventLoc}</td>
                                    <td>
                                        {new Date(event.bookingDate).toLocaleDateString(undefined, {
                                            day: '2-digit',
                                            month: '2-digit',
                                            year: 'numeric'
                                        })}
                                    </td>

                                    <td>{event.totalCost}</td>
                                    {/* Add Status cell if available in your data */}
                                    <td>
                                        <button className="dash-btn btn-pay">Pay</button>
                                        <button className="dash-btn btn-can">Cancel</button>
                                        </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="Terms-Conditions container">
                    <h1 className="lg-heading">Terms and Conditions of Use for Royal Event Crafters
                    </h1>
                    <ol className="terms">
                        <li className="terms-list"><span>Introduction:</span><p>Welcome to the Royal Event Crafters website. These terms and conditions govern your use of our website; by using our website, you accept these terms and conditions in full. If you disagree with these terms and conditions or any part of these terms and conditions, you must not use our website.</p></li>
                        <li className="terms-list"><span>Acceptance of Terms: </span><p> By using our website, you agree to abide by these terms and conditions.

                        </p></li>
                        <li className="terms-list"> <span>Governing Law:</span><p>These terms and conditions will be governed by and construed in accordance and any disputes relating to these terms and conditions will be subject to the exclusive jurisdiction of the courts.</p></li>
                        <li className="terms-list"><span>Catering Information</span>
                            <p>Catering orders are starting from a minimum of 50 plates. If you want to reduce the plate count, please contact us at RECrafters@gmail.com.</p></li>

                        <li className="terms-list"><span>Contact Information</span>
                            <p>If you have any questions or concerns about these terms and conditions, please contact us at RECrafters@gmail.com.</p></li>

                    </ol>
                </div>
            </div>
        </>
    )
}