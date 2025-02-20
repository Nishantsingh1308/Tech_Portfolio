import React from 'react';
import { Mouse } from 'lucide-react';

const ScrollDown = () => {
  return (
    <div className="home__scroll">
        <a href="#about" className="home__scroll-button 
        button--flex">
            <Mouse />
            <span className="home__scroll-name">
                Scroll Down
            </span>
            
            <i class="uil uil-arrow-down home__social"></i>
        </a>
    </div>
  )
}

export default ScrollDown;