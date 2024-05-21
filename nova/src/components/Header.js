import React from 'react';
import './Css/Header.css';
import background from '../images/background.png';


const Header = () => {
    return (
        <header
            className="header text-white text-center py-5"
            style={{ backgroundImage: `url(${background})` }}
        >
            <div className="container">
                <div className="header-content">
                    <h1>Cocoa Haven</h1>
                    <h2>Empowering Healthier Futures, Together</h2>
                    <p>
                        Owned and Operated by Dylan Polewczyk
                    </p>

                </div>
            </div>
        </header>
    );
};

export default Header;
