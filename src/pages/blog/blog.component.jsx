import React from "react";
import PostItem from "../../components/post-item/post-item.component";

import "./blog.styles.css";

const Blog = () => {
  const title = "Lorem ipsum dolor sit amet consectetur adipisicing elit";

  const content =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et earum, placeat laboriosam autem consequatur voluptas culpa exercitationem corrupti iure illum quod esse officiis animi voluptates recusandae soluta quidem quaerat sed.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed doloribus facere nulla et facilis, dolores magnam repellat enim impedit reprehenderit aut necessitatibus voluptate totam debitis dolorum ab amet eveniet, provident itaque, natus libero quo. Ipsa nihil dolores minima, blanditiis quisquam voluptatibus quos eos asperiores recusandae sapiente, exercitationem odio quo doloremque at voluptates praesentium corporis consequuntur expedita consectetur ratione tenetur hic porro rem. Consequatur placeat ducimus mollitia suscipit, dolore ipsum! Quis aliquam nemo dicta cumque! Optio voluptas facere saepe totam! Earum ratione blanditiis laudantium fugiat, iure laborum est placeat, optio ea quas cumque. Placeat, quo sint id adipisci laboriosam vel doloribus";

  return (
    <div className='blog'>
    <div className="blog-title">Posts</div>
      <div className='posts-container'>
        <PostItem id="1" title={title} content={content} />
        <PostItem id="2" title={title} content={content} />
        <PostItem id="3" title={title} content={content} />
        <PostItem id="4" title={title} content={content} />
        <PostItem id="5" title={title} content={content} />
        <PostItem id="6" title={title} content={content} />
      </div>
    </div>
  );
};

export default Blog;
