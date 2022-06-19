import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import detailImg from '../../../assets/detail.png';

import './SwiperProduct.css';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';

export default function SwiperProduct() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={{ clickable: true }}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={detailImg} className="d-block w-100" alt="..." />
        </SwiperSlide>
        <SwiperSlide>
          <img src={detailImg} className="d-block w-100" alt="..." />
        </SwiperSlide>
        <SwiperSlide>
          <img src={detailImg} className="d-block w-100" alt="..." />
        </SwiperSlide>
        <SwiperSlide>
          <img src={detailImg} className="d-block w-100" alt="..." />
        </SwiperSlide>
      </Swiper>
    </>
  );
}