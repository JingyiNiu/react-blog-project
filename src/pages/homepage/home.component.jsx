import React from "react";
import Card from "../../components/card/card.component";

import "./home.styles.css";

const Home = () => {

  const url='https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80';
  const title='This is title';
  const text =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam error ratione ducimus quisquam ad magnam eveniet aliquam quam, laborum molestias quidem minima commodi hic quo dignissimos natus tempora nulla dolores";

  return (
    <div className='home'>
      <Card
        imgUrl={url}
        title={title}
        content={text}
      />
      <Card
        imgUrl={url}
        title={title}
        content={text}
      />
    </div>
  );
};

export default Home;
