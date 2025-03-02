import React, { useState } from 'react'; 
import './services.css';

const Services = () => {

    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    };



  return (
    <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What i do</span>

        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title">Web <br /> Developer </h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(1)}> 
                    View More <i className="uil uil-arrow-right services__button-icon"></i>
                </span>


                <div className={toggleState === 1 ? "services__modal active-modal":"services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">Web Developer</h3>
                        <p className="services__modal-description">
                            Work experience more than 6 months. 
                            doing quality work and contributing with friends.
                        </p>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle service__modal-icon"></i>
                                <p className="services__modal-info">
                                    I develop websites using Javascript and MERN frameworks.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle service__modal-icon"></i>
                                <p className="services__modal-info">
                                    I develop GUI projects using Python.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle service__modal-icon"></i>
                                <p className="services__modal-info">
                                    I create UX element interaction.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle service__modal-icon"></i>
                                <p className="services__modal-info">
                                    Contribute and participate with teams.
                                </p>
                            </li>


                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-arrow services__icon"></i>
                    <h3 className="services__title">Ui/Ux <br /> Designer</h3>
                </div>

                <span onClick={() => toggleTab(2)} className="services__button">
                    View More <i className="uil uil-arrow-right services__button-icon"></i>
                </span>


                <div className={toggleState === 2 ? "services__modal active-modal":"services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">Ui/Ux Designer</h3>
                        <p className="services__modal-description">
                            Work experience more than 6 months. 
                            doing quality work and contributing with friends.
                        </p>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle service__modal-icon"></i>
                                <p className="services__modal-info">
                                    I design UI/UX interface using figma and canva.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle service__modal-icon"></i>
                                <p className="services__modal-info">
                                    Web Page Development.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle service__modal-icon"></i>
                                <p className="services__modal-info">
                                    I create UX element interaction.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle service__modal-icon"></i>
                                <p className="services__modal-info">
                                    Contribute and participate with teams.
                                </p>
                            </li>


                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil services__icon"></i>
                    <h3 className="services__title">Visual <br /> Designer</h3>
                </div>

                <span onClick={() => toggleTab(3)} className="services__button">
                    View More <i className="uil uil-arrow-right services__button-icon"></i>
                </span>


                <div className={toggleState === 3 ? "services__modal active-modal":"services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">Visual Designer</h3>
                        <p className="services__modal-description">
                            Work experience more than 6 months. 
                            doing quality work and contributing with friends.
                        </p>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle service__modal-icon"></i>
                                <p className="services__modal-info">
                                    I develop user interface.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle service__modal-icon"></i>
                                <p className="services__modal-info">
                                    Web Page Development.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle service__modal-icon"></i>
                                <p className="services__modal-info">
                                    I create UX element interaction.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle service__modal-icon"></i>
                                <p className="services__modal-info">
                                    Contribute and participate with teams.
                                </p>
                            </li>


                        </ul>
                    </div>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Services
