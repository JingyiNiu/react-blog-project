import React from "react";
import "./input.styles.css";

const Input = ({ inputType, placeholder, text }) => {
  return (
    <div className='input'>
      <div className='input-label'>{text}</div>
      <input className='input-row' type={inputType} placeholder={placeholder} />
    </div>
  );
};

export default Input;
