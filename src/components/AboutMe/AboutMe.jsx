import React from 'react';
import './AboutMe.scss'
import myImg from '../../assets/Face2.jpg'
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import LanguageIcon from '@mui/icons-material/Language';
import CV from "../../assets/CV.pdf";
import Buttons from "../UI/Buttons/Buttons";

const AboutMe = () => {
    const btn1 = {
        title: "Download CV",
        href: CV
    }

    const btn2 = {
        title: "Contacts",
        href: "#contacts"
    }
    return (
        <section className="about" id="about">
            <h5>Get to know</h5>
            <h2 className="blue">About Me</h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={myImg} alt="me"/>
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <div className="about__card">
                            <MilitaryTechIcon className="about__icon"/>
                            <h5>My experience</h5>
                            <small>1 year</small>
                        </div>
                        <div className="about__card">
                            <LanguageIcon className="about__icon"/>
                            <h5>English level</h5>
                            <small>upper-intermediate</small>
                        </div>
                    </div>
                    <p>
                        I'm a passionate frontend developer
                        with a huge desire to learn new and
                        improve. Currently, I'm looking for a
                        new challenging project to develop
                        myself even more. I am hard-working,
                        able to maintain a good quality of work
                        tasks. I have experience to work in a team.
                        I have been use React, Node, JavaScript, HTML/SCSS, Next.
                    </p>
                    <Buttons btn1={btn1} btn2={btn2} target={"_self"}/>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;