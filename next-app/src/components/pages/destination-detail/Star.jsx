import React from 'react';
import ReactStars from 'react-rating-stars-component';

const StarsComponent = ({ defaultValue, ...props }) => {
  return (
    <ReactStars
      {...props}
      value={defaultValue}
    />
  );
};

export default StarsComponent;