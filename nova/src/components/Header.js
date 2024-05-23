import React from 'react';
import './Css/Header.css';
import background from '../images/homepagefinal1.svg';


const Header = () => {
    return (
        <section id='header' className='header'>
        <div  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minheight: '40vh' }}>
        <img src={background} width="500px" height="500px" color='#e9ceb0' >
            
        </img>
        </div>
        </section>
    );
};

export default Header;
