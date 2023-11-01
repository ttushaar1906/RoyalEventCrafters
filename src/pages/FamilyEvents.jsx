import React from "react";
import '../styles/styling.css';
import { Link } from "react-router-dom";
export default function FamilyEvents() {
    return (

        <div>
            <div className="scroll-container">
                <div className="item">
                    <img src="https://image.wedmegood.com/resized/450X/uploads/member/3265474/1660804521_image875.jpg?crop=3,381,1432,805" alt="" />
                    <img src="https://i0.wp.com/decorsutrablog.com/wp-content/uploads/2022/01/WhatsApp-Image-2022-01-27-at-10.34.11-PM.jpeg?fit=1080%2C900&ssl=1" alt="" />
                    <img src="https://image.wedmegood.com/resized/450X/uploads/project/233566/1675468180_PRAK6661.jpg?crop=0,213,2048,1152" alt="" />
                    <img src="https://im.idiva.com/content/2017/Dec/idiva_bharti_matakichowki_4.jpg" alt="" />
                    <img src="https://shaadifever.com/wp-content/uploads/2019/02/mohitjauraphotography_20190220112118.jpg" alt="" />
                    <img src="https://media.weddingz.in/images/8783a77558a0c86290e4328abecaa4a7/10-Super-Fun-and-Quirky-Ideas-to-throw-the-most-Epic-Pool-Party-at-your-Wedding-1.jpg" alt="poolParty" />
                    <img src="https://m.media-amazon.com/images/I/71CPYDgZgqL._AC_SL1000_.jpg"
                        alt="Birthday Party" />
                    <img src="https://i.pinimg.com/originals/0a/d8/1b/0ad81b9e4286623012758758dd300db7.jpg" alt="Barat" />
                </div>
            </div>

            <section>

                <div className="container">
                    <p className="title-heads title-head">"Royal Event Crafters specialize in crafting cherished family gatherings with personalized touches and memorable moments."</p>

                    <div className="co-operative-events">
                        <Link to="/RoyalEvent/wedding" className="link-edit">
                            <div className="family-img">
                                <img src="https://cdn0.weddingwire.in/article/5378/3_2/1280/jpg/78735-open-air-venues-in-delhi-for-day-weddings-pixelstory-in-lead-image.jpeg"
                                    alt="" />
                            </div>
                            <div className="cooperative-content">
                                <h2 className="md-heading">Grand Weddings</h2>
                                <p>Royal Event Crafters create unforgettable anniversary celebrations, weaving love stories into timeless, joyous moments.</p>
                            </div>
                        </Link>
                    </div>

                    <div className="co-operative-events">
                        <Link to="/RoyalEvent/anniversary" className="link-edit">
                            <div className="family-img">
                                <img src="https://5.imimg.com/data5/GLADMIN/Default/2021/12/DH/RR/QG/4049929/wedding-anniversary-decoration.jpg"
                                    alt="" />
                            </div>
                            <div className="cooperative-content">
                                <h2 className="md-heading">Anniversaries</h2>
                                <p>Royal Event Crafters create unforgettable anniversary celebrations, weaving love stories into timeless, joyous moments.</p>
                            </div>
                        </Link>
                    </div>
                    <div className="co-operative-events">
                        <Link to="/RoyalEvent/birthdayParty" className="link-edit">
                            <div className="family-img">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCcUHl4Y38F2hy29o4lfcuXXvM2DrYq86X1W63oT0MoU44ItVG5vvaNrDeaur0mSZMUHw&usqp=CAU"
                                    alt="" />
                            </div>
                            <div className="cooperative-content">
                                <h2 className="md-heading">Birthdays</h2>
                                <p>Royal Event Crafters design unique, joyful birthday celebrations filled with personalized surprises and enchantment.</p>
                            </div>
                        </Link>
                    </div>

                    <div className="co-operative-events">
                        <Link to="/Index" className="link-edit">
                            <div className="family-img">
                                <img src="https://i.postimg.cc/nzJtKR4R/ganapati.jpg" alt="" />
                            </div>
                            <div className="cooperative-content">
                                <h2 className="md-heading">Festivals</h2>
                                <p>Royal Event Crafters creates stunning festival decorations, crafting unforgettable celebrations.</p>
                            </div>
                        </Link>
                    </div>

                </div>
            </section>


        </div >
    )
}
