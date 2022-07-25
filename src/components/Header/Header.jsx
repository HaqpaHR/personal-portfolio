import React from "react";
import './Header.scss'
import ReactTypingEffect from "react-typing-effect";
import HeaderSocial from "./HeaderSocial";
import CV from '../../assets/CV.pdf';
import Buttons from "../UI/Buttons/Buttons";

const headerInfo = {
  name: "Pereverzev Viacheslav",
  text: [
    "Front-end developer",
    "React.js",
    "Javascript",
    "HTML/CSS",
    "Node.js",
  ],
  delay: 1000,
};

const Header = () => {
  const btn1 = {
    title: "Download CV",
    href: CV
  }

  const btn2 = {
    title: "Contacts",
    href: "#contacts"
  }

  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello, I'm</h5>
        <h1>{headerInfo.name}</h1>
        <ReactTypingEffect
          className="header__typing-text"
          text={headerInfo.text}
          eraseDelay={headerInfo.delay}
          eraseSpeed={50}
          typingDelay={50}
        />
        <Buttons btn1={btn1} btn2={btn2} target={'_self'}/>
        <HeaderSocial/>
      </div>
    </header>
  );
};

export default Header;
