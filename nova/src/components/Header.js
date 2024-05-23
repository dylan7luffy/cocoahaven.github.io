import React from 'react';
import './Css/Header.css';
import background from '../images/background.png';


const Header = () => {
    return (
        <header
            className="header text-white text-center py-5"
            style={{ backgroundImage: `url(${background})` }}
        >
        </header>
    );
};

export default Header;
