import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import PostPreview from "../../components/post-preview/post-preview.component";

import "./blog.styles.css";

const Blog = () => {
  useEffect(() => {
    fetchPosts();
  }, []);

  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await data.json();
    setPosts(posts);
  };

  return (
    <div className='blog'>
      <div className='blog-title'>Posts</div>
      <div className='posts-container'>
        {posts.map((post) => (
          <Link to={`/posts/${post.id}`} key={post.id}>
            <PostPreview id={post.id} title={post.title} content={post.body} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;
