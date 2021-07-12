import React from "react";
import {Link} from "react-router-dom"

import "./nav.styles.css";

const Nav = () => {
  return (
    <div className='navbar'>
      <div className="nav-item nav-logo">React Demo</div>
      <Link to="/" className="nav-item">Home</Link>
      <Link to="/posts" className="nav-item">Blog</Link>
    </div>
  );
};

export default Nav;
