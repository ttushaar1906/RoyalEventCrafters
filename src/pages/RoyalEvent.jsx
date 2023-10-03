import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/styling.css';

export default function RoyalEvent() {
    return (
        <div>
            <div className="scroll-container">
                <div className="item">
                    <img src="https://image.wedmegood.com/nw/uploads/project/13060/1487600957_IMG_20170120_WA0076.jpg" alt="" />
                    <img src="https://www.rajwadaevents.com/uploaded-files/celebrity-images/Event-Planner5149.jpg" alt="" />
                    <img src="https://media.istockphoto.com/id/650655146/photo/catering-food-wedding-event-table.jpg?s=612x612&w=0&k=20&c=ATGYgW8bM_559jJ5aUNO4HlJqpkOWUmNNMMflx5kajo=" alt="" />
                    <img src="https://i.postimg.cc/CxfvnH6r/1483625069-IMG-20151208-WA0033.jpg" alt="hall" />
                    <img src="https://shaadifever.com/wp-content/uploads/2019/02/mohitjauraphotography_20190220112118.jpg" alt="" />
                    <img src="https://ak0.picdn.net/shutterstock/videos/1501670/thumb/1.jpg" alt="" />
                    <img src="https://image.wedmegood.com/nw/uploads/member/11719/1469173089_Dream_Makers__1_.jpg" alt="" />
                    <img src="https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2022/08/18144727/Ganpati-Mandap-Decoration-With-Flowers.jpg" alt="" />
                </div>
            </div>

            <section>
                <div className="container events-types">
                    <p className="title-head">At Royal Event Crafters, we turn moments into memories and visions into reality. Your
                        event, our expertise!</p>
                    <div className="personal-event" id='FamilyEvent'>
                        <Link to="../FamilyEvents">
                            <div className="img-container">
                                <img
                                    src="https://i.postimg.cc/Y2sJn35b/top-12-wedding-destinations-in-india-20171027033333.jpg"
                                    alt="" />
                            </div>
                            <div className="text-contain">
                                <h1 className="lg-heading">Family Events</h1>
                                <p>Family functions and events that encompass weddings, anniversaries, birthdays, and festivals are
                                    the threads that weave the rich fabric of our lives. These gatherings are a celebration of love,
                                    growth, and tradition. From the joyous union of souls in a wedding to the commemoration of
                                    lasting love in anniversaries, and from the marking of another year in a birthday to the shared
                                    festivities of cultural and religious festivals, each event adds its unique color to the canvas
                                    of our family history.</p>
                            </div>
                        </Link>
                    </div>

                    <div className="cooperate-event" id='cooperate-event'>
                        <Link to="/RoyalEvent/co-operativeEvent">
                            <div className="img-container">
                                <img src="https://i.postimg.cc/jdqWsyZV/image.png" alt="" />
                            </div>

                            <div className="text-contain">
                                <h1 className="lg-heading">Co-operate Events</h1>
                                <p>Cooperation functions and events, including conferences and annual meetings, are the stepping
                                    stones to progress and success. These gatherings bring together individuals and organizations
                                    with a shared vision, a commitment to collaboration, and a drive to achieve common goals. During
                                    conferences, experts exchange knowledge, ideas, and insights, fostering innovation and growth.
                                    Annual meetings serve as a crucial platform to review achievements, set new directions, and
                                    strengthen bonds.</p>
                            </div>
                        </Link>
                    </div>
                </div >
            </section >


            <section className="post">

                <h1 className="lg-heading" id="photos">
                    Real Photos
                </h1>
                <p className="title-head container">"Royal Event Crafters curate extraordinary gatherings, blending luxury, innovation, and bespoke experiences for discerning clients."</p>
                <div className="container">
                    <div className="post1">
                        <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/breaking_news/201811/deepveer.jpeg?VersionId=yVxkbPFFmV.paFUGRLIxHlmjIB6YWma"
                            alt="" />
                        <p className="namesP">Ranveer & Deepika.</p>
                        <p className="placeName">Real Destination Wedding, Italy</p>
                    </div>
                    <div className="post1">
                        <img src="https://cdn0.weddingwire.in/vendor/2788/3_2/960/jpg/wedding-photography-sr-photo-creation-pre-wedding-shoot-1_15_222788-162192496020294.jpeg"
                            alt="" />
                        <p className="namesP">Aayan & Shirley</p>
                        <p className="placeName">Pre-Wedding Photoshoot, Udaipur</p>
                    </div>

                    {/* <div className="post1">
                        <img src="https://images.pexels.com/photos/7694284/pexels-photo-7694284.jpeg?cs=srgb&dl=pexels-anoop-vs-7694284.jpg&fm=jpg"
                            alt="" />
                        <p className="namesP">VijaySethupati & Rasmika</p>
                        <p className="placeName">Real Wedding, Kerala</p>
                    </div> */}
                    <div className="post1">
                        <img src="https://static.standard.co.uk/s3fs-public/thumbnails/image/2018/10/08/09/google-conference-8-10.jpg?width=1200&auto=webp&quality=75"
                            alt="" />
                        <p className="namesP"> Sundhar Pichai</p>
                        <p className="placeName">Google Confernece , USA</p>
                    </div>
                    <div className="post1">
                        <img src="https://cdn0.weddingwire.in/article/5912/3_2/1280/jpg/82195-punjabi-wedding-amrit-arora-photography-wedding.jpeg"
                            alt="" />
                        <p className="namesP">Avneet & Karun.</p>
                        <p className="placeName">Real Destination Wedding,Amritsar.</p>
                    </div>
                    <div className="post1">
                        <img src="https://i.pinimg.com/originals/bd/b6/a2/bdb6a2f5e5c3ab4e14b40fde7bfa5a49.jpg" alt="" />
                        <p className="namesP">Sanket & Shriya</p>
                        <p className="placeName">Real Wedding, Pune</p>
                    </div>

                    {/* <div className="post1">
                        <img src="https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_720/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/afh3lhnchb4vqi7b4vyb/PrivatePhotoshootExperienceinManali.webp"
                            alt="" />
                        <p className="namesP">Jethalal & Gulabo</p>
                        <p className="placeName">Real Wedding, Manali</p>
                    </div> */}
<div className="post1">
                        <img src="data:image/jpeg;base64,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"
                            alt="" />
                        {/* <p className="namesP">Jethalal & Gulabo</p> */}
                        <p className="placeName">Reception Theme</p>
                    </div>

                    <div className="post1">
                        <img src="https://i.pinimg.com/originals/19/26/b7/1926b73fee671afa1401afc7a0fe564a.jpg" alt="" />
                        <p className="namesP">Shreyas & Dhanashree</p>
                        <p className="placeName">Pre-Wedding Photoshoot,French Colonies, Pondicherry.</p>
                    </div>
                    <div className="post1">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQST5WYk1gZ2Ti8yAErBXhqg_aG9VR9j9WFiQ&usqp=CAU"
                            alt="" />
                        <p className="namesP">Kajol & Ranbir</p>
                        <p className="placeName">Pre-Wedding PhotoShoot,Elephanta Caves</p>
                    </div>
                </div>
            </section>

        </div >
    )
}
