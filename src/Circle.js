import React from 'react';
import	PropTypes	from	'prop-types';

export const Circle = (props) => {
  const {
    className,
    fill,
    radius,
    x,
    y,
  }
  = props;
  return (
    <svg className={className} viewBox="0 0 100 100">
      <circle cx={x} cy={y} r={radius} fill={fill}/>
    </svg>
  )
};

Circle.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string,
  radius: PropTypes.number,
  x: PropTypes.number,
  y: PropTypes.number,
};
