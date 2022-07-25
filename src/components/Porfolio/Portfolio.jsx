import React from 'react';
import './Portfolio.scss';
import PortfolioCard from "./PortfolioCard";
import {portfolios} from "./portfolio-info";

const Portfolio = () => {
    return (
        <section className="portfolio" id="portfolio">
            <h5>My recent work</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio__container">
                {portfolios.map(portfolio => (
                    <PortfolioCard portfolio={portfolio}/>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;