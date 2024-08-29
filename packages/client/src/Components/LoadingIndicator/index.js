import React from 'react';
import './LoadingIndicator.css';

/**
 * LoadingIndicatorコンポーネント
 * @returns 
 */
const LoadingIndicator = () => {
  return (
    <div className="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default LoadingIndicator;
