import React from 'react';

const Cards = (props) => {

    console.log(props)
    const { name, img, details } = props.sd
    return (
        <div className='col'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <br />
            <p>{details}</p>
            <button>More</button>
        </div>


    );
};

export default Cards;