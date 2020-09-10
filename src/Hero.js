import React from 'react';
import homeBanner from './resources/HomeImages/homeBanner.jpg';
import './Hero.css';

function Hero() {
    return (
        <div className="grid">
            <div className="hero">
                <img className="hero__image" src={homeBanner} alt="" />
                <h1 className="hero__title">New Styles Are In</h1>
            </div>
        </div>
    )
}

export default Hero;
