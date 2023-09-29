import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import '../styles/styling.css';
import Footer from "../componets/Footer";

export default function Home() {
    return (
        <div>
            <section>
                <img src="https://image.wedmegood.com/resized/1900X/uploads/city_bg_image/1/delhi_bg.jpeg" alt="" />
            </section>
            <section className="aboutus" id="aboutus"> {/* Use className instead of class */}
                <div className="container"> {/* Use className instead of class */}
                    <h1 className="lg-heading">Royal Events Crafters</h1> {/* Use className instead of class */}
                    <h2 className="md-heading">Plan your wedding with Us</h2> {/* Use className instead of class */}
                    <p className="about-con">
                        <span>Welcome to [Your Event Planning Company Name], where we transform your dreams into unforgettable
                            events!
                            At [Your Event Planning Company Name], we are passionate about creating extraordinary moments that
                            leave lasting memories.</span>
                        <span> With a team of dedicated and experienced event planners, we take pride in our ability to turn
                            your vision into reality, no matter the scale or theme of your event.
                        </span>
                    </p>
                    <h1 className="lg-heading">Our Mission</h1> {/* Use className instead of class */}
                    <p> {/* Add a wrapping <p> element */}
                        <span>Our mission is simple: to craft exceptional events that reflect your unique style and personality. We
                            understand that every event is a reflection of your individuality and aspirations, and that's why we
                            approach each project with enthusiasm, creativity, and attention to detail. Whether it's an intimate
                            gathering or a grand celebration, we are committed to making it a one-of-a-kind experience for you and
                            your guests.</span>
                    </p>
                    <h1 className="lg-heading">What Sets Us Apart</h1> {/* Use className instead of class */}
                    <ul> {/* Use <ul> for an unordered list */}
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
                    <h1 className="lg-heading">Our Services</h1> {/* Use className instead of class */}
                    <ul> {/* Use <ul> for an unordered list */}
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
            <section className="contactUs" id="contactUs"> {/* Use className instead of class */}
                <div className="container"> {/* Use className instead of class */}
                    <form action="" className="form"> {/* Use className instead of class */}
                        <div className="left-contact-sec"> {/* Use className instead of class */}
                            <h1 className="lg-heading">Write Us</h1> {/* Use className instead of class */}
                            <label htmlFor="name">Name:</label> {/* Use htmlFor instead of for */}
                            <input type="text" name="name" id="name" />
                            <label htmlFor="email">Email:</label> {/* Use htmlFor instead of for */}
                            <input type="email" name="email" id="email" />
                            <label htmlFor="subject">Subject:</label> {/* Use htmlFor instead of for */}
                            <input type="text" name="subject" id="subject" />
                            <label htmlFor="message">Message:</label> {/* Use htmlFor instead of for */}
                            <textarea name="message" id="message" cols="63" rows="5"></textarea>
                            <button type="submit" className="btn">Send Message</button> {/* Use className instead of class */}
                        </div>
                        <div className="right-contact-sec"> {/* Use className instead of class */}
                            <h1 className="lg-heading">Contact Information</h1> {/* Use className instead of class */}
                            <p>We're open for any suggestion or just to have a chat</p>
                            <div className="cont-info"> {/* Use className instead of class */}
                                <div className="cont-content"> {/* Use className instead of class */}
                                    <FontAwesomeIcon icon={faLocationDot} style={{ color: '#ffffff' }} />
                                    <span>  Address:</span>Royal Event Crafters,
                                    MG Road,
                                    Pune, Maharashtra 411001.
                                </div>
                                <div className="cont-content"> {/* Use className instead of class */}
                                    <FontAwesomeIcon icon={faPhone} style={{ color: '#ffffff' }} />
                                    <span>  Phone: </span>9527921209
                                </div>
                                <div className="cont-content"> {/* Use className instead of class */}
                                    <FontAwesomeIcon icon={faEnvelope} style={{ color: '#ffffff' }} />
                                    <span>  Email: </span>ttushaar45@gmail.com
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
}