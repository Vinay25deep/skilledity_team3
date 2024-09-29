import React from 'react';

const SemiCircularProgressBar = ({ percentage, color }) => {
  const radius = 50; 
  const strokeWidth = 9; 
  const circumference = Math.PI * radius; 
  const offset = ((100 - percentage) / 100) * circumference; 

  return (
    <svg width="120" height="70" viewBox="0 0 120 60">
      <path
        d="M 10 50 A 50 50 0 1 1 110 50" 
        fill="transparent"
        stroke="#e6e6e6"
        strokeWidth={strokeWidth}
      />

      <path
        d="M 10 50 A 50 50 0 1 1 110 50" 
        fill="transparent"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference} 
        strokeDashoffset={offset} 
        strokeLinecap="round"
      />

      <text
        x="60"
        y="45"
        textAnchor="middle"
        fill="grey" 
        fontSize="20px"
        fontWeight="500" 
      >
        {percentage}%
      </text>
    </svg>
  );
};

export default SemiCircularProgressBar;



