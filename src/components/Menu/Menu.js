import React from 'react';
import './Menu.css';
import logo from '../images/logo/globetech logo.png'

const Menu = () => {
    return (
        <div class="menu">
            <img src={logo} alt="" />
            <div className='menu-items'>
                <a href="/">Home</a>
                <a href="services">Services</a>
                <a href="login">Login</a>
            </div>
            
        </div> 
    );
};

export default Menu;