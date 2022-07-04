import React, { Component } from 'react';
import Slider from 'react-slick';
import './Slick.css';

export default function CenterMode() {
  const data = [1, 2, 3, 4];
  const settings = {
    className: 'center',
    centerMode: true,
    centerPadding: '320px',
    speed: 500,
    responsive: [
      {
        breakpoint: 1230,
        settings: {
          dots: false,
          slidesToShow: 1,
          centerPadding: '0px',
        },
      },
      //   {
      //     breakpoint: 1024,
      //     settings: {
      //       slidesToShow: 3,
      //       slidesToScroll: 3,
      //       infinite: true,
      //       dots: true,
      //       centerPadding: '320px',
      //     },
      //   },
      //   {
      //     breakpoint: 600,
      //     settings: {
      //       slidesToShow: 2,
      //       slidesToScroll: 2,
      //       initialSlide: 2,
      //     },
      //   },
      //   {
      //     breakpoint: 480,
      //     settings: {
      //       slidesToShow: 1,
      //       slidesToScroll: 1,
      //     },
      //   },
    ],
  };
  return (
    <div className="mt-5">
      <Slider {...settings}>
        {data.map((data, index) => (
          <div className="item p-4">
            <div className="row justify-content-center align-items-center p-3">
              <div
                className="col-12"
                style={{
                  width: '539px',
                  height: '224px',
                  background: '#FFE9CA',
                  borderRadius: '20px',
                }}
              ></div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
