import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';


function Poster() {
  return (
    <div>
      <section className="poster-home" id="home">
        <div className="poster-content">
          <h3 className="colorful-text">Home of your brightest ideas</h3>
        </div>

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={false}
          className="home-slider"
        >
          <SwiperSlide><img src="./images/home1.jpg" alt="Slide 1" /></SwiperSlide>
          <SwiperSlide><img src="./images/home2.jpg" alt="Slide 2" /></SwiperSlide>
          <SwiperSlide><img src="./images/home3.jpg" alt="Slide 3" /></SwiperSlide>
          <SwiperSlide><img src="./images/home4.jpg" alt="Slide 4" /></SwiperSlide>
          <SwiperSlide><img src="./images/home5.jpg" alt="Slide 5" /></SwiperSlide>
          <SwiperSlide><img src="./images/home6.jpg" alt="Slide 6" /></SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
}

export default Poster;
