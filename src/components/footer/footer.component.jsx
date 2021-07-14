import React from "react";

import "./footer.stylec.css";

const Footer = () => {
  return (
    <div className='footer'>
      Copyright &copy; {new Date().getFullYear()} Zoey
    </div>
  );
};

export default Footer;
