import React from "react";
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <a href="#home" className="footer__logo">
      </a>
      <ul className="footer__links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contacts">Contacts</a>
        </li>
      </ul>
      <div className="footer__social"></div>
      <div className="footer__copyright"><small>© PV 2022. All rights reserved.</small></div>
    </footer>
  );
};

export default Footer;
