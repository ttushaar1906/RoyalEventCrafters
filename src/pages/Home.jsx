import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChampagneGlasses, faPeopleGroup, faFaceLaughBeam, faLandmark } from "@fortawesome/free-solid-svg-icons";
import '../styles/styling.css';
import { useLocation } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <section>
                <img src="https://image.wedmegood.com/resized/1900X/uploads/city_bg_image/1/delhi_bg.jpeg" alt="" />
            </section>
            <div className="container adv">
                <div className="adv-section">
                    <h1><FontAwesomeIcon icon={faPeopleGroup} style={{ color: "#e4007d", }} /></h1>
                    <h1 className="md-heading">Friendly Team</h1>
                    <p className="adv-des">Teamwork, Trust, and Togetherness.</p>
                </div>
                <div className="adv-section">
                    <h1><FontAwesomeIcon icon={faLandmark} style={{ color: "#e4007d", }} /></h1>
                    <h1 className="md-heading">Prefect Venues</h1>
                    <p className="adv-des">Where Dreams Meet Perfect Venues.</p>
                </div>
                <div className="adv-section">
                    <h1><FontAwesomeIcon icon={faChampagneGlasses} style={{ color: "#e4007d", }} /> </h1>
                    <h1 className="md-heading">Unique Scenarios</h1>
                    <p className="adv-des">Crafting Memories in One-of-a-Kind Environments.</p>
                </div>
                <div className="adv-section">
                    <h1><FontAwesomeIcon icon={faFaceLaughBeam} style={{ color: "#e4007d", }} /></h1>
                    <h1 className="md-heading">Unforgettable Time</h1>
                    <p className="adv-des">Time well spent, memories forever treasured.</p>

                </div>
            </div>

            <section className="aboutus" id="aboutus">
                <div className="container">
                    <h1 className="lg-heading">Royal Events Crafters</h1>
                    <h2 className="md-heading">Plan your wedding with Us</h2>
                    <div className="about-con">
                        <p>Welcome to Royal Event Crafters, where we transform your dreams into unforgettable
                            events!
                            At Royal Event Crafters, we are passionate about creating extraordinary moments that
                            leave lasting memories.</p>
                        <p> With a team of dedicated and experienced event planners, we take pride in our ability to turn
                            your vision into reality, no matter the scale or theme of your event.
                        </p>
                    </div>

                    <h1 className="lg-heading">Our Mission</h1>
                    <div className="about-con">
                        <p>Our mission is simple: to craft exceptional events that reflect your unique style and personality. We
                            understand that every event is a reflection of your individuality and aspirations, and that's why we
                            approach each project with enthusiasm, creativity, and attention to detail. Whether it's an intimate
                            gathering or a grand celebration, we are committed to making it a one-of-a-kind experience for you and
                            your guests.</p>
                    </div>

                    <h1 className="lg-heading">What Sets Us Apart</h1>
                    <ul className="about-con">
                        <li>Expertise: Our team of event planners brings years of industry expertise to the table. We stay
                            up-to-date with the latest trends and technologies to ensure your event is both timeless and
                            cutting-edge.</li>
                        <li>Personalized Service: We believe that no two events are alike, and that's why we provide
                            personalized solutions tailored to your specific needs and desires. Your vision is our inspiration,
                            and we work closely with you to bring it to life.</li>
                        <li>Attention to Detail: It's the little things that make an event truly special. We pay meticulous
                            attention to every detail, from the selection of the perfect color palette to the choice of the
                            finest vendors.</li>
                        <li>Vendor Relationships: Over the years, we have built strong relationships with a network of trusted
                            vendors and partners. This allows us to negotiate the best prices and secure top-quality services
                            for your event.</li>
                        <li>Stress-Free Planning: Planning an event can be overwhelming. We take the stress out of the process
                            by handling all the logistics, so you can relax and enjoy every moment.</li>
                    </ul>
                    <h1 className="lg-heading">Our Services</h1>
                    <ul className="about-con">
                        <li>Wedding Planning: Let us make your wedding day the most magical and stress-free experience of your
                            life.</li>
                        <li>Corporate Events: From conferences to product launches, we ensure your corporate events make a
                            lasting impression.</li>
                        <li>Social Gatherings: Birthdays, anniversaries, and more – we make every celebration unforgettable.
                        </li>
                        <li>Destination Events: Want to celebrate in a far-off destination? We've got you covered with our
                            destination event planning services.</li>
                    </ul>
                </div>
            </section>

        </div>
    );
}