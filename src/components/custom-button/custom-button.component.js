import React from 'react'
import './custom-button.styles.scss';

const CustomButtom = ({ children, isGoogleSignIn, inverted, ...otherProps }) => {
  return (
    <button className={`${inverted ? 'inverted' : ''} custom-button`} {...otherProps} >
      {children}
    </button>
  );
}

export default CustomButtom;