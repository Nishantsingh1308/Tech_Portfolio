import React from 'react';
import { Hand } from 'lucide-react';
import { Send } from 'lucide-react';

const Data = () => {
  return (
    <div className="home__data">
        <h1 className="home__title">
            Nishant Kumar Singh
            <Hand />
        </h1>
        <h3 className="home__subtitle">
            Software Developer</h3>

            <p className="home__description">
                I'm a creative Web Developer and Designer. I'm very passionate and dedicated to my work.
            </p>
            <a href="#contact" className="button butoon-flex">
                Say Hello
                <Send />
            </a>
    </div>
  )
}

export default Data;
