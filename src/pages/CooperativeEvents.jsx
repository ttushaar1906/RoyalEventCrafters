import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/styling.css';


export default function CooperativeEvents() {
    return (
        <>
            <div className="scroll-container">
                <div className="item">
                    <img src="https://www.sterlingeventsgroup.com/wp-content/uploads/2017/05/ClientMeetingWinmockrev-1080x675.jpg" alt="" />
                    <img src="https://images.squarespace-cdn.com/content/v1/60da576b8b440e12699c9263/ecf992ff-4de5-4a26-891a-2a3645dd75c4/ovation+1.jpg" alt="" />
                    <img src="https://www.rajwadaevents.com/uploaded-files/celebrity-images/Event-Planner5149.jpg" alt="" />
                    <img src="https://media.istockphoto.com/id/650655146/photo/catering-food-wedding-event-table.jpg?s=612x612&w=0&k=20&c=ATGYgW8bM_559jJ5aUNO4HlJqpkOWUmNNMMflx5kajo=" alt="" />
                    <img src="https://i0.wp.com/bigtop.com.sg/wp-content/uploads/2022/03/Launching-Mechanism-Rental-in-Sinapore.jpg" alt="" />
                </div>
            </div>

            <section>
                <div className="container">
                    <p className="title-head">"Royal Event Crafters host collaborative extravaganzas, uniting
                        creativity, culture, and community in unforgettable experiences."</p>
                    <div className="co-operative-events">
                    <Link to="/RoyalEvent/Conferences" className="link-edit">
                        <div className="cooperative-img">
                            <img src="https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZXZlbnQlMjBwbGFubmluZ3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                                alt="" />
                        </div>
                        <div className="cooperative-content">
                            <h2 className="md-heading">Conferences</h2>
                            <p>Experienced conference event planners delivering flawlessly executed, memorable gatherings for
                                your organization's success</p>
                        </div>
                    </Link>
                    </div>

                    <div className="co-operative-events">
                    <Link to="/RoyalEvent/pressconferences" className="link-edit">
                        <div className="cooperative-img">
                            <img src="https://images.squarespace-cdn.com/content/v1/60da576b8b440e12699c9263/1d3b07b5-f348-45a9-8f7b-fdc4d10fc4bd/20210915-110858-OVATION-02944.jpg"
                                alt="" />
                        </div>
                        <div className="cooperative-content">
                            <h2 className="md-heading">Press Conferences</h2>
                            <p>Expert event planners specializing in seamless press conferences, ensuring impactful media
                                coverage.</p>
                        </div>
                        </Link>
                    </div>

                    <div className="co-operative-events">
                    <Link to="//RoyalEvent/AwardCeremony" className="link-edit">
                        <div className="cooperative-img">
                            <img src="https://bizzabo.com/wp-content/uploads/2021/09/The-Europas-Awards-Ceremony-Ideas-min.png"
                                alt="" />
                        </div>
                        <div className="cooperative-content">
                            <h2 className="md-heading">Award Ceremony</h2>
                            <p>Award ceremony specialists crafting unforgettable, prestigious events that honor excellence and
                                leave lasting impressions.</p>
                        </div>
                        </Link>
                    </div>

                    <div className="co-operative-events">
                    <Link to="/RoyalEvent/BrandLaunch" className="link-edit">
                        <div className="cooperative-img">
                            <img src="https://i.pinimg.com/originals/ce/ef/d4/ceefd4edaf32cd654759df91cddebad0.png" alt="" />
                        </div>
                        <div className="cooperative-content">
                            <h2 className="md-heading">Brand Launch</h2>
                            <p>Strategic brand launch event planners orchestrating captivating and impactful debuts for your
                                brand's success.</p>
                        </div>
                        </Link>
                    </div>

                </div>
            </section>
        </>
    )
}