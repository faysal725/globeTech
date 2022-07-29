import React from 'react';
import './Shuttle.css'
import shuttle  from '../images/shuttle/rocket.svg';

const Shuttle = () => {
    return (
        <div className='shuttle'>
            <div className='movement'>
                <div  className='shuttle-fire'>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <img  src={shuttle} alt="" />
            </div>
        </div>
    );
};

export default Shuttle;