import React from "react";
import "./testimonial.css";
import IMG from "../../assets/changer.jpg";
import AV1 from "../../assets/avat1.JPG";
import AV2 from "../../assets/avat2.jpg";
import AV3 from "../../assets/avat3.JPG";
import AV4 from "../../assets/avat4.JPG";
import AV5 from "../../assets/avat5.JPG";

// import Swiper core and required modules
import { Pagination, Navigation, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
//import 'swiper/swiper.min.css'
//import 'swiper/modules/pagination/pagination.min.css'

export const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      testimonial:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus est, consequatur illum ullam numquam voluptate necessitatibus sequi quidem obcaecati! Veritatis repellendus provident neque. Porro, id illum iure soluta vel alias, maiores tempora doloremque vitae neque maxime at, facilis ipsum molestiae dicta quasi harum optio atque deserunt quis amet consectetur perspiciatis.",
      avatar: IMG,
      Cname: "Client 1",
    },
    {
      id: 2,
      testimonial:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus est, consequatur illum ullam numquam voluptate necessitatibus sequi quidem obcaecati! Veritatis repellendus provident neque. Porro, id illum iure soluta vel alias, maiores tempora doloremque vitae neque maxime at, facilis ipsum molestiae dicta quasi harum optio atque deserunt quis amet consectetur perspiciatis.",
      avatar: AV1,
      Cname: "Client 2",
    },
    {
      id: 3,
      testimonial:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus est, consequatur illum ullam numquam voluptate necessitatibus sequi quidem obcaecati! Veritatis repellendus provident neque. Porro, id illum iure soluta vel alias, maiores tempora doloremque vitae neque maxime at, facilis ipsum molestiae dicta quasi harum optio atque deserunt quis amet consectetur perspiciatis.",
      avatar: AV2,
      Cname: "Client 3",
    },
    {
      id: 4,
      testimonial:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus est, consequatur illum ullam numquam voluptate necessitatibus sequi quidem obcaecati! Veritatis repellendus provident neque. Porro, id illum iure soluta vel alias, maiores tempora doloremque vitae neque maxime at, facilis ipsum molestiae dicta quasi harum optio atque deserunt quis amet consectetur perspiciatis.",
      avatar: AV3,
      Cname: "Client 4",
    },
    {
      id: 5,
      testimonial:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus est, consequatur illum ullam numquam voluptate necessitatibus sequi quidem obcaecati! Veritatis repellendus provident neque. Porro, id illum iure soluta vel alias, maiores tempora doloremque vitae neque maxime at, facilis ipsum molestiae dicta quasi harum optio atque deserunt quis amet consectetur perspiciatis.",
      avatar: AV5,
      Cname: "Client 5",
    },
    {
      id: 6,
      testimonial:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus est, consequatur illum ullam numquam voluptate necessitatibus sequi quidem obcaecati! Veritatis repellendus provident neque. Porro, id illum iure soluta vel alias, maiores tempora doloremque vitae neque maxime at, facilis ipsum molestiae dicta quasi harum optio atque deserunt quis amet consectetur perspiciatis.",
      avatar: AV4,
      Cname: "Client 6",
    },
  ];
  return (
    <section id="testimonial">
      <h5>Review from client</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      modules={[Pagination, Navigation, Scrollbar, A11y]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {testimonials.map((testi) => {
          return (
            <SwiperSlide key={testi.id} className="testimonial">
              <div className="client__avatar">
                <img src={testi.avatar} alt="client avatar" />
              </div>
              <h5 className="client__name"> {testi.Cname} </h5>
              <small className="client__review"> {testi.testimonial} </small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};
export default Testimonial;
