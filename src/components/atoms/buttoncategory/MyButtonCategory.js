import React, { useState } from 'react';
import './ButtonCategory.css';

const MyButtonCategory = ({
  content,
  isActive,
  handleFilter,
  changeActive,
  handleChange,
  css,
}) => {
  const buttonStyle = {
    border: 'none',
    background: isActive ? '#7126B5' : '#E2D4F0',
    padding: '14px 24px',
    borderRadius: '12px',
    color: isActive ? 'white' : 'black',
    marginRight: '16px',
    width: '140px'
  };
  return (
    <button
      className={css ? css : ''}
      style={buttonStyle}
      onClick={(e) => {
        changeActive(true);
        handleChange(e);
        if (content === 'Semua') {
          handleFilter(e, '');
        } else {
          handleFilter(e, content);
        }
      }}
    >
      {content == 'Jual' && <i className="fa-solid fa-plus me-2"></i>}
      {content !== 'Jual' && (
        <i className="fa-solid fa-magnifying-glass me-2"></i>
      )}
      {content}
    </button>
  );
};

export default MyButtonCategory;
