import React from "react";
import '../styles/styling.css';

export default function Reviews() {
    return (
        <div>
            <center><h1 className="lg-heading" id="lg-heading">Feedback from our clients</h1></center>
            <div class="container">
                <div class="reviews">
                    <img src="https://i.postimg.cc/MTSGyyXG/couple-3.jpg" alt="couple1" />
                    <h1 className="lg-heading">Gururaj & Diksha</h1>
                    <p>"We're overjoyed with our dream destination wedding, all thanks to Royal Event Crafters! Every moment was perfect, from the stunning venue to the smallest details. They made our special day truly magical and stress-free. Forever grateful for their expertise and dedication."</p>
                </div>

                <div class="reviews">
                    <img src="https://static.toiimg.com/thumb/msid-99810135,width-1280,resizemode-4/99810135.jpg" alt="filmfare" />
                    <h1 className="lg-heading">FilmFare</h1>
                    <p>Filmfare praised Royal Event Crafters for their exceptional planning and flawless execution of our award ceremony. Their attention to detail, creative vision, and seamless organization made it an unforgettable event that left everyone in awe. We look forward to many more successful collaborations with them.</p>
                </div>

                <div class="reviews">
                    <img src="https://juksun.com/wp-content/uploads/2022/04/Ranbir-Kapoor-Filmography.jpg" alt="couple 3" />
                    <h1 className="lg-heading">Ranbir Kapoor</h1>
                    <p>The Kapoor family extends heartfelt gratitude to Royal Event Crafters for crafting an unforgettable party. Your attention to detail, creative flair, and flawless execution made our event a cherished memory. We couldn't have asked for more. Thank you for making it extraordinary!</p>
                </div>
            </div>

            <div className="container">
                <form className="feedbackForm">
                    <h2 className="md-heading">Feedback Form </h2>
                    <p>We would love to hear your thoughts, suggestions, concerns or problems with anything so we can improve!</p>


                    <input type="text" id="name" placeholder="Enter Your Name" required />
                    <input type="email" id="email" placeholder="Enter Your Email" required />
                    <input type="phone" id="phone" placeholder="Enter Your Phone Number" required />

                    <h2 className="md-heading">
                        Feedback Type
                    </h2>
                    <div className="radio ">
                        <input type="radio" id="TypeComment" name="feedbackType" /> Comment
                        <input type="radio" id="TypeFeedback" name="feedbackType" /> Feedback
                        <input type="radio" id="TypeSuggest" name="feedbackType" /> Suggest
                    </div>
                    <textarea id="message" rows="4" placeholder="Describe Your Feedback" required></textarea>
                    <button type="submit" className="feedBack-btn">Send</button>
                </form>

            </div>
        </div>
    )
}