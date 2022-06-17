import React, { useState } from 'react';
import './ButtonCategory.css';

const ButtonCategory = ({ content, isActive }) => {
  const buttonStyle = {
    border: 'none',
    background: isActive ? '#7126B5' : '#E2D4F0',
    padding: '14px 24px',
    borderRadius: '12px',
    color: isActive ? 'white' : 'black',
    marginRight: '16px',
  };
  return (
    <button style={buttonStyle}>
      <i className="fa-solid fa-magnifying-glass me-2"></i>
      {content}
    </button>
  );
};

export default ButtonCategory;
