import React, { useState } from "react";
import '../styles/styling.css';

export default function Reviews() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        user_mobileno: "",
        rating: "",
        message: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("/feed", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.status === 200) {
                // Handle success, e.g., show a confirmation message
                console.log("Feedback submitted successfully.");
            } else {
                // Handle errors, display an error message to the user
                console.error("Feedback submission failed.");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div>
            <center><h1 className="lg-heading" id="lg-heading">Feedback from our clients</h1></center>
            <div className="container">
    <div className="reviews">
        <img src="./assets/images/couple1.jpg" alt="couple1" />
        <h1 className="lg-heading">Gururaj & Diksha</h1>
        <p>Thank you for an exceptional conference experience! Your informative sessions, networking opportunities, and seamless organization were highly valuable. I look forward to attending future events and gaining even more insights.</p>
    </div>

    <div className="reviews">
        <img src="https://shorturl.at/ajmzO" alt="couple 2" />
        <h1 className="lg-heading">Avneet & Shikhar</h1>
        <p>Newlyweds, your feedback means the world to us. Share your thoughts on your special day with us to help us enhance the magic of your wedding experience. We're committed to making your journey unforgettable.</p>
    </div>

    <div className="reviews">
        <img src="https://shorturl.at/nIUVZ" alt="couple 3" />
        <h1 className="lg-heading">AppWizards</h1>
        <p>AppWizards values your input. Your feedback is a crucial part of our commitment to creating outstanding mobile apps. Please share your thoughts to help us continue delivering magic through technology.</p>
    </div>
</div>

            <div className="container">
                <form className="feedbackForm" onSubmit={handleSubmit}>
                    <h2 className="md-heading">Feedback Form</h2>
                    <p>We would love to hear your thoughts, suggestions, concerns, or problems with anything so we can improve!</p>

                    <input type="text" name="name" id="name" placeholder="Enter Your Name" required onChange={handleInputChange} />
                    <input type="email" name="email" id="email" placeholder="Enter Your Email" required onChange={handleInputChange} />
                    <input type="tel" name="user_mobileno" id="phone" placeholder="Enter Your Phone Number" required onChange={handleInputChange} />

                    <h2 className="md-heading">Feedback Type</h2>
                    <div className="radio">
                        <input type="radio" id="comment" name="rating" value="Comment" onChange={handleInputChange} /> Comment
                        <input type="radio" id="feedback" name="rating" value="Feedback" onChange={handleInputChange} /> Feedback
                        <input type="radio" id="suggest" name="rating" value="Suggest" onChange={handleInputChange} /> Suggest
                    </div>
                    <textarea className="message" name="message" id="message" rows="4" placeholder="Describe Your Feedback" required onChange={handleInputChange}></textarea>
                    <button type="submit" className="feedBack-btn">Send</button>
                </form>
            </div>
        </div>
    );
}
