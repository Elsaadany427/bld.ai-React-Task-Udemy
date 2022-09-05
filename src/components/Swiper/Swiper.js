import React from "react";
import { Swiper } from "swiper/react";
import "swiper/swiper.min.css";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

export default function CustemSwiper(props) {
  const content = props.children;

  return (
    <Swiper
      navigation={true}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      spaceBetween={20}
      slidesPerView={1}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        // when window width is >= 640px
        640: {
          width: 240,
          slidesPerView: 1,
        },
        // when window width is >= 768px
        768: {
          width: 568,
          slidesPerView: 2,
        },
      }}
      id="main"
      width="280"
    >
      {content}
    </Swiper>
  );
}
