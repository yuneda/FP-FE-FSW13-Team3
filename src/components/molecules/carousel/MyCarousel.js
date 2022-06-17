import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import CardCarousel from './CardCarousel';
import './Carousel.css';

const Carousel = () => {
  const resp = {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 2,
    },
  };
  const styleItem = {
    height: '350px',
    width: '400px',
  };
  const carouselContainer = {};
  return (
    <>
      <OwlCarousel
        className="owl-theme mt-5"
        loop={true}
        margin={100}
        // nav={true}
        center={true}
        dots={false}
        responsive={resp}
        // style={{
        //   border: '1px solid blue',
        // }}
      >
        <CardCarousel />
        <CardCarousel />
        <CardCarousel />
        <CardCarousel />
        <CardCarousel />
      </OwlCarousel>
    </>
  );
};

export default Carousel;
