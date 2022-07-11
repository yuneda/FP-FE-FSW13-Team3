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
import { useMediaQuery } from 'react-responsive';

export default function SwiperProduct({ imgProduct }) {
  const notDesktop = useMediaQuery({ query: '(max-width: 991px)' });
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={notDesktop ? false : true}
        pagination={{ clickable: true }}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {imgProduct.map((swiper, index) => (
          <SwiperSlide key={index}>
            <img
              src={swiper}
              className="d-block w-100 img-fluid"
              alt="..."
              style={{
                borderRadius: notDesktop ? '0px' : '16px',
                // maxHeight: '436px',
                height: '436px',
                // objectFit: 'cover',
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
