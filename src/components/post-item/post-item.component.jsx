import React from "react";

import "./post-item.styles.css";

const PostItem = ({id, title,content}) => {
  return (
    <div className='post'>
      <div className='post-title'>{id} - {title}</div>
      <div className='post-content'>{content.substr(0,150)+" ..."}</div>
    </div>
  );
};

export default PostItem;
