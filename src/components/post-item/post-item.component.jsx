import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./post-item.styles.css";

const PostItem = () => {
  const [post, setPost] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    fetchPost();
  }, []);

  const fetchPost = async () => {
    const data = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const post = await data.json();
    setPost(post);
  };

  return (
    <div>
      <div className='post-title'>Post Details</div>
      <div className='post-item'>
        <div className='post-item-title'>{post.title}</div>
        <div className='post-item-content'>
          <p>Post ID: {post.id}</p>
          <p>{post.body}</p>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
