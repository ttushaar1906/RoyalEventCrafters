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

            <p className="lg-heading title-heading">Turning Dreams into Events, and Events into Memories.</p>
            <div className="main-events container" id='main-events'>
                <div className="main-event">
                    <Link to="../RoyalEvent/wedding">
                        <div className="main-event-img">
                            <img src="https://www.tharoasis.com/image/a-grand-wedding-at-thar-oasis-resort-in-jodhpur.jpg" alt="wedding" />
                        </div>
                        <div className="main-event-title">
                            <h1 className="lg-heading">Wedding</h1>
                        </div>
                    </Link>
                </div>

                <div className="main-event">
                    <Link to="../RoyalEvent/anniversary">
                        <div className="main-event-img">
                            <img src="https://i.postimg.cc/fbL88BVh/25-anniversary.jpg" alt="anniversary" />
                        </div>
                        <div className="main-event-title">
                            <h1 className="lg-heading">Anniversary </h1>
                        </div>
                    </Link>
                </div>

                <div className="main-event">
                    <Link to="../RoyalEvent/birthdayParty">
                        <div className="main-event-img">
                            <img src="https://i.postimg.cc/LXBvsg0H/happy-birthday.jpg" alt="birthday" />
                        </div>

                        <div className="main-event-title">
                            <h1 className="lg-heading">Birthdays</h1>
                        </div>
                    </Link>
                </div>

                <div className="main-event">
                    <Link to='/RoyalEvent/Conferences'>
                        <div className="main-event-img">
                            <img src="https://pegasusevents.in/wp-content/uploads/2017/06/Marsh-and-Mclennan-Conference-by-Pegasus-Events-India-Pvt-Ltd-2.jpg" alt="" />
                        </div>
                        <div className="main-event-title">
                            <h1 className="lg-heading">Conferences</h1>
                        </div>
                    </Link>
                </div>

                <div className="main-event">
                    <Link to='../RoyalEvent/AwardCeremony'>
                        <div className="main-event-img">
                            <img src="https://www.inventiveevents.com/wp-content/uploads/2019/03/awards-room-copy.jpg" alt="Award-ceremony" />
                        </div>
                        <div className="main-event-title">
                            <h1 className="lg-heading">Award Ceremony
                            </h1>
                        </div>
                    </Link>
                </div>

                <div className="main-event">
                    <Link to='../RoyalEvent/BrandLaunch'>
                        <div className="main-event-img">
                            <img src="https://5.imimg.com/data5/RA/HA/GLADMIN-36077309/product-launch-events-management-service.png" alt="brand-launch" />
                        </div>
                        <div className="main-event-title">
                            <h1 className="lg-heading">Brand Launch</h1>
                        </div>
                    </Link>
                </div>

                <div className="main-event">
                    <Link to='../RoyalEvent/pressconferences'>
                        <div className="main-event-img">
                            <img src="https://images.squarespace-cdn.com/content/v1/56a93c3bc647ad307dd7a6d4/1644261012745-BL0WN0WTEMU9DH187K9K/Outback+Bowl+2022+Press+Conference.jpg" alt="press-confernce" /></div>
                        <div className="main-event-title">
                            <h1 className="lg-heading">Press Conferences</h1>
                        </div>
                        </Link>
                </div>
            </div>


            {/* menu  */}

            <section>
                <div className="container events-types">
                    <p className="title-head">At Royal Event Crafters, we turn moments into memories and visions into reality. Your
                        event, our expertise!</p>
                    <div className="personal-event" id='FamilyEvent'>
                        <Link to="../RoyalEvent/FamilyEvents">
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





            {/* photos */}
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

                    <div className="post1">
                        <img src="https://i.postimg.cc/7YZWJ4mz/reception.jpg"
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

                    <div className="post1">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRukJ_gvQmqLxMxRLe5tLuqrubZyZbpBy-n8Q&usqp=CAU"
                            alt="" />
                        <p className="namesP">Star Plus Award</p>
                        <p className="placeName">Award Ceremony , Mumbai</p>
                    </div>

                </div>
            </section>

        </div >
    )
}
