import React from 'react';
import Menu from '../Menu/Menu';
import './Mainpage.css';
import Ellipse1 from '../images/homeImg/Ellipse 1.svg';
import Ellipse2 from '../images/homeImg/Ellipse 2.svg';
import Ellipse3 from '../images/homeImg/Ellipse 3.svg';
import Ellipse4 from '../images/homeImg/Ellipse 4.svg';
import planet1 from '../images/homeImg/planet 1.svg';
import planet2 from '../images/homeImg/planet 2.svg';
import planet3 from '../images/homeImg/planet3.svg';
import planet4 from '../images/homeImg/planet 4.svg';
import planet5 from '../images/homeImg/planet 5.svg';
import planet6 from '../images/homeImg/planet 6.svg';
import Description from './Description/Description';



const Mainpage = () => {

    return (
        <div className='base'>
            <Menu />
            <div className='details'>
                <Description />
                <div className='atom'>
                    <img id='ellipse1' src={Ellipse1} alt="" />
                    <img id='ellipse2' src={Ellipse2} alt="" />
                    <img id='ellipse3' src={Ellipse3} alt="" />
                    <img id='ellipse4' src={Ellipse4} alt="" />


                    <img id='planet1' src={planet1} alt="" />
                    <img id='planet2' src={planet2} alt="" />
                    <img id='planet3' src={planet3} alt="" />
                    <img id='planet4' src={planet4} alt="" />
                    <img id='planet5' src={planet5} alt="" />
                    <img id='planet6' src={planet6} alt="" />
                    

                </div>
            </div>
        </div>
    );
};

export default Mainpage;