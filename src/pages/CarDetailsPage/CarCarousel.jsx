import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./styles.css";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";

export default function CarCarousel({ images }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="max-w-sm md:max-w-xl overflow-hidden mx-auto pt-8 w-full pr-4 ">
      <Swiper
        spaceBetween={10}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Thumbs]}
        className=" Swiper2"
      >
        {images?.map((image, idx) => {
          return (
            <SwiperSlide key={idx}>
              <img
                className="h-full w-full block object-cover rounded-full"
                src={image}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="Swiper"
      >
        {images?.map((image, idx) => {
          return (
            <SwiperSlide key={idx}>
              <img
                className="h-full w-full block object-cover rounded-full"
                src={image}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
