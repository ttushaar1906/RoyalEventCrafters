import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import '../styles/styling.css';
// import { useNavigate } from 'react-router-dom';

export default function Contact() {
  const [selectedOption, setSelectedOption] = useState("");

  // Handle changes in the dropdown
  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNO: "", // Corrected field name
    message: "",
  });

  // Handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send a POST request to your backend with formData
    try {
      const response = await fetch("/Contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Handle response and display a success message or handle errors
      if (response.status === 200) {
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          mobileNO: "",
          message: "",
        });
      } else {
        // Handle errors, e.g., display an error message to the user
        alert("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <section className="contactUs" id="contactUs">
        <div className="container">
          <h1 className="lg-heading">Frequently Asked Questions</h1>
          <section className="dropdown">
            <select value={selectedOption} onChange={handleDropdownChange} required>
              <option value="FAQs">FAQs</option>
              <option value="option1">What are your areas of expertise?</option>
              <option value="option2">WHAT SERVICES DO YOU OFFER?</option>
              <option value="option3">WHY DO I NEED AN EVENT PLANNING?</option>
            </select>

            {selectedOption === "option1" && <p className='drop-ans'>We have specialize in event planning and management, offering expertise in a range of event types, including destination weddings, brand launches, conferences, and birthday celebrations. I can provide guidance on venue selection, logistics, marketing, budgeting, vendor management, and creative event design to ensure memorable and successful occasions.</p>}

            {selectedOption === "option2" && <p className='drop-ans'>We offer a comprehensive event planning service. We’re able to find venues, organise catering, décor, accommodation, staffing, equipment and even hire speakers for corporate events. We offer a tailor made service to fit your requirements. Every event is unique and we have the capacity to fulfill your requirements from start to finish.</p>}

            {selectedOption === "option3" && <p className='drop-ans'> An experienced event planner saves you time and money.We will supply reputable suppliers and vendors, negotiate the best rates, discounts, terms and conditions on your behalf and co-ordinate all aspects of your event. Using an event planner takes away stress and worry, and gives you peace of mind to enjoy your event.</p>}

          </section>
          <form action="" className="form" onSubmit={handleSubmit}>
            <div className="left-contact-sec">
              <h1 className="lg-heading">Write Us</h1>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                className='contact-input'
                placeholder="Enter Your Name"
                required
              />
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                className='contact-input'
                placeholder="Enter Your Email"
                required
              />
              <label htmlFor="subject">Mobile No:</label>
              <input 
              type="tel" 
              className='contact-input' 
              name="mobileNO"
              id="mobileNO" 
              placeholder="Enter Your Phone Number" 
              onChange={handleInputChange}
              required />

              <label htmlFor="message">Message:</label>
              <textarea
                name="message"
                id="message"
                cols="63"
                rows="5"
                value={formData.message}
                onChange={handleInputChange}
                className='contact-input' 
                required
              ></textarea>
              <button type="submit" className="btn">
                Send Message
              </button>
            </div>

            <div className="right-contact-sec">
              <h1 className="lg-heading">Contact Information</h1>
              <p>We're open for any suggestion or just to have a chat</p>

              <div className="cont-info">
                <div className="cont-content">
                  <FontAwesomeIcon icon={faLocationDot} style={{ color: '#ffffff' }} />
                  <span>  Address:</span>Royal Event Crafters,
                  MG Road,
                  Pune, Maharashtra 411001.
                </div>

                <div className="cont-content">
                  <FontAwesomeIcon icon={faPhone} style={{ color: '#ffffff' }} />
                  <span>  Phone: </span>9527921209
                </div>

                <div className="cont-content">
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

