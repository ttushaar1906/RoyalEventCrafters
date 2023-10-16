import React from "react";
import '../styles/styling.css';
import { Link } from "react-router-dom";

export default function Main() {
    return (
        <>
            <div className="main-events container">
                <div className="main-event">
                    <Link to="../wedding">
                        <div className="main-event-img">
                            <img src="https://www.tharoasis.com/image/a-grand-wedding-at-thar-oasis-resort-in-jodhpur.jpg" alt="wedding" />
                        </div>
                        <div className="main-event-title">
                            <h1 className="lg-heading">Wedding</h1>
                        </div>
                    </Link>
                </div>

                <div className="main-event">
                    <div className="main-event-img">
                        <img src="https://i.postimg.cc/fbL88BVh/25-anniversary.jpg" alt="anniversary" />
                    </div>
                    <div className="main-event-title">
                        <h1 className="lg-heading">Anniversary </h1>
                    </div>
                </div>

                <div className="main-event">
                    <div className="main-event-img">
                        <img src="https://i.postimg.cc/LXBvsg0H/happy-birthday.jpg" alt="birthday" />
                    </div>
                    <div className="main-event-title">
                        <h1 className="lg-heading">Birthdays</h1>
                    </div>
                </div>

                <div className="main-event">
                    <div className="main-event-img">
                        <img src="https://pegasusevents.in/wp-content/uploads/2017/06/Marsh-and-Mclennan-Conference-by-Pegasus-Events-India-Pvt-Ltd-2.jpg" alt="" />
                    </div>
                    <div className="main-event-title">
                        <h1 className="lg-heading">Conferences</h1>
                    </div>
                </div>

                <div className="main-event">
                    <div className="main-event-img">
                        <img src="https://www.inventiveevents.com/wp-content/uploads/2019/03/awards-room-copy.jpg" alt="Award-ceremony" />
                    </div>
                    <div className="main-event-title">
                        <h1 className="lg-heading">Award Ceremony
                        </h1>
                    </div>
                </div>

                <div className="main-event">
                    <div className="main-event-img">
                        <img src="https://5.imimg.com/data5/RA/HA/GLADMIN-36077309/product-launch-events-management-service.png" alt="brand-launch" />
                    </div>
                    <div className="main-event-title">
                        <h1 className="lg-heading">Brand Launch</h1>
                    </div>
                </div>

                <div className="main-event">
                    <div className="main-event-img">
                        <img src="https://images.squarespace-cdn.com/content/v1/56a93c3bc647ad307dd7a6d4/1644261012745-BL0WN0WTEMU9DH187K9K/Outback+Bowl+2022+Press+Conference.jpg" alt="press-confernce" /></div>
                    <div className="main-event-title">
                        <h1 className="lg-heading">Press Conferences</h1>
                    </div>
                </div>
            </div>
        </>
    )
}