import React from 'react';
import Shuttle from '../../Shuttle/Shuttle';
import './Description.css';

const Description = () => {
    return (
        <div className='description'>
        <div>
            <Shuttle />
        </div>
        <div className='text-part'>
            <h1>Welcome to <span>Globetech</span> </h1>
            <p>We are committed to deliver <span>best IT services</span>. Our Consultants have experience in working with clients. We have extensive experience in the software application space and also offer a broad range and depth of technology.</p>
            <div className='btn-part'>
                <button className='text-part-btn'>Support Us</button>
                <button className='text-part-btn'>Our Mission</button>
            </div>
        </div>
</div> 
    );
};

export default Description;