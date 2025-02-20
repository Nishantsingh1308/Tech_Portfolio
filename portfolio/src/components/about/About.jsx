import React from 'react';
import "./about.css";
import AboutImg from "../../assets/abouts.jpg";
import CV from "../../assets/nishantresume.pdf";
import Info from './Info';

const About = () => {
    return (
        <section className="about section" id="about">
            <h2 className="section__title">
                About Me
            </h2>
            <span className="section__subtitle">
                My Introduction
            </span>

            <div className="about__container container grid">
                <img src={AboutImg} alt="About Image" className="about__img" />

                <div className="about__data">
                    <Info />

                    <p className="about__description">
                        MERN Stack developer, I created web pages with UI/UX user
                        interface, I have half a year experience and happy response from teammates
                        with the projects carried out.
                    </p>

                    <a download href={CV} className="button button--flex">
                        Download Resume
                    </a>

                </div>
            </div>
        </section>
    );
}

export default About
