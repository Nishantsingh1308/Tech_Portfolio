import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Nishant</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link" >About</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link" >Projects</a>
                    </li>

                </ul>

                <div className="footer__social">
                    <a href="https://www.instagram.com/nishant_2076/" className="footer__social-icon"
                        target="_blank">
                        <i class="bx bxl-instagram"></i>
                    </a>

                    <a href="https://www.linkedin.com/in/nishant-kumar-singh-7916b42a4/" className="footer__social-icon"
                        target="_blank">
                        <i class="bx bxl-linkedin"></i>
                    </a>

                    <a href="https://github.com/Nishantsingh1308" className="footer__social-icon"
                        target="_blank">
                        <i class="bx bxl-github"></i>
                    </a>
                </div>

                <span className="footer__copy">&#169; NishantSingh. All rights reserved</span>
            </div>
        </footer>
    )
}

export default Footer