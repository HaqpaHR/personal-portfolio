import React from 'react';
import Buttons from "../UI/Buttons/Buttons";


const PortfolioCard = ({portfolio}) => {
    const {title, demo, github, image} = portfolio;

    return (
        <div className="portfolio__card">
            <div className="portfolio__card-image">
                <img src={image} alt={title} width="100%" height="100%"/>
            </div>
            <h3>{title}</h3>
            <Buttons btn1={github} btn2={demo} target={"_blank"}/>
        </div>
    );
};

export default PortfolioCard;