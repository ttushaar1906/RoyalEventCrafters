import React from "react";
import '../styles/styling.css';

export default function Dashboard() {
    return (
        <>
            <div className="dashboard-details container">
                <div className="dashboard-name">
                    Name:
                </div>
                <div className="dashboard-events">
                    <table className="dashboard-table">
                        <tr className="table-row">
                            <th className="table-head">
                                Event Name
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
                        <tr>
                            <td>
                                Lorem, ipsum dolor.
                            </td>
                            <td>
                                Lorem, ipsum dolor.
                            </td>
                            <td>
                                Lorem, ipsum dolor.
                            </td>

                        </tr>
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
                        <p>Catering orders are starting from minimum 50 plates. If you want to reduces the plates count,please contact us at RECrafters@gmail.com.</p></li>
                   
                        <li className="terms-list"><span>Contact Information</span>
                        <p>If you have any questions or concerns about these terms and conditions, please contact us at RECrafters@gmail.com.</p></li>
                        
                    </ol>
                </div>
            </div>
        </>
    )
}
