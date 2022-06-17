import React from 'react';

const CardCarousel = ({ img }) => {
  return (
    <div className="item p-4">
      <div className="row justify-content-center align-items-center p-3">
        <div
          className="col-12"
          style={{
            width: '753px',
            height: '224px',
            background: '#FFE9CA',
            borderRadius: '20px',
          }}
        ></div>
      </div>
    </div>
  );
};

export default CardCarousel;
