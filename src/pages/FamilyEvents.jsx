import React from "react";
import '../styles/styling.css';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function FamilyEvents() {
    return (
        <div>
            <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        classNameName="mySwiper"
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}
      >
        <SwiperSlide><img src="https://image.wedmegood.com/resized/thumb_800X/uploads/real_wedding/440/1483625069_IMG_20151208_WA0033.jpg" alt="" /></SwiperSlide>
        
        <SwiperSlide><img src="https://image.wedmegood.com/nw/uploads/project/13060/1487600957_IMG_20170120_WA0076.jpg" alt="" /></SwiperSlide>
        
        <SwiperSlide><img src="https://www.rajwadaevents.com/uploaded-files/celebrity-images/Event-Planner5149.jpg" alt="" /></SwiperSlide>
        
        <SwiperSlide><img src="https://media.istockphoto.com/id/650655146/photo/catering-food-wedding-event-table.jpg?s=612x612&w=0&k=20&c=ATGYgW8bM_559jJ5aUNO4HlJqpkOWUmNNMMflx5kajo=" alt="" /></SwiperSlide>
        
        <SwiperSlide><img src="https://shaadifever.com/wp-content/uploads/2019/02/mohitjauraphotography_20190220112118.jpg" alt="" /></SwiperSlide>
        
        <SwiperSlide><img src="https://media.weddingz.in/images/8783a77558a0c86290e4328abecaa4a7/10-Super-Fun-and-Quirky-Ideas-to-throw-the-most-Epic-Pool-Party-at-your-Wedding-1.jpg" alt="poolParty" /></SwiperSlide>
        
        <SwiperSlide><img src="https://media.istockphoto.com/id/650655146/photo/catering-food-wedding-event-table.jpg?s=612x612&w=0&k=20&c=ATGYgW8bM_559jJ5aUNO4HlJqpkOWUmNNMMflx5kajo=" alt="" /></SwiperSlide>

        <SwiperSlide><img src="https://m.media-amazon.com/images/I/71CPYDgZgqL._AC_SL1000_.jpg"
                alt="Birthday Party" /></SwiperSlide>
        
      </Swiper>

        </div>
    )
}
