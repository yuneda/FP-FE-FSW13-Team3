import React from 'react';
import banner from '../../../assets/banner2.png';
import { useMediaQuery } from 'react-responsive';

const CardCarousel = ({ img }) => {
  const notDesktop = useMediaQuery({ query: '(max-width: 991px)' });
  return (
    <div className="item p-4">
      <div className="row justify-content-center align-items-center p-3">
        <div
          className="col-12 g-0"
          style={{
            width: '783px',
            height: notDesktop ? '284px' : '284px',
            background: '#FFE9CA',
            borderRadius: '20px',
          }}
        >
          <img src={banner} alt="" className="h-100 w-100" />
        </div>
      </div>
    </div>
  );
};

export default CardCarousel;
