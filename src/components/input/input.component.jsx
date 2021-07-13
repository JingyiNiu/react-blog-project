import React from "react";
import "./input.styles.css";

const Input = ({
  inputType,
  placeholder,
  text,
  isCorrect,
  errorMsg,
  onChange,
}) => {
  return (
    <div className='input-container'>
      <div className='input-label'>{text}</div>
      {isCorrect ? (
        <div className='invalid'>{errorMsg}</div>
      ) : (
        <div className='valid'>valid inputs</div>
      )}
      <div className='input-row'>
        <input
          className='input'
          type={inputType}
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default Input;
