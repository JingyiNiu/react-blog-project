import React from "react";

import "./post-preview.styles.css";

const PostPreview = ({ id, title, content }) => {
  return (
    <div className='post-preview'>
      <div className='post-preview-title'>
        {id} - {title}
      </div>
      <div className='post-preview-content'>{content.substr(0, 150) + " ..."}</div>
    </div>
  );
};

export default PostPreview;
