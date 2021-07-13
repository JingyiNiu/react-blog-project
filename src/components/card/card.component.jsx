import React from "react";

import "./card.styles.css";

const Card = ({ imgUrl, title, content }) => {
  return (
    <div className='card'>
      <div className='card-img'>
        <img src={imgUrl} alt='card' />
      </div>
      <div className='card-title'>{title}</div>
      <div className='card-content'>{content}</div>
    </div>
  );
};

export default Card;
