import React from 'react';
import './Services.css';
import Cards from './cards/Cards';
import softwareSol from '../images/ServicesCard/software.svg';
import ecommerce from '../images/ServicesCard/ecommerce.svg';
import erp from '../images/ServicesCard/erp.svg';
import digital from '../images/ServicesCard/digital.svg';
import graphic from '../images/ServicesCard/graphic.svg';
import bulk from '../images/ServicesCard/bulk.svg';
import Menu from '../Menu/Menu';
import Shuttle from '../Shuttle/Shuttle';


const Services = () => {
    let serviceDetails =[
        {
            "name": "Software Solution", 
            "details": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'",
            "img": softwareSol
        },
        {
            "name": "E-Commerce Solution", 
            "details": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'",
            "img": ecommerce
        },
        {
            "name": "ERP Solution", 
            "details": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'",
            "img": erp
        },
        {
            "name": "Digital Marketing", 
            "details": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'",
            "img": digital
        },
        {
            "name": "Digital Marketing", 
            "details": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'",
            "img": graphic
        },
        {
            "name": "Bulk SMS Service", 
            "details": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'",
            "img": bulk
        }
    ]
    return (
        <div className='service-holder'>
            <Menu></Menu>
            <>
                <Shuttle></Shuttle>
            </>
            

            <div className='service-headline'>
                <h3>SERVICES</h3>
                <h1>We provides services to our clients</h1>
            </div>

            <div className='all-cards'>
                {
                serviceDetails.map(sd => <Cards sd={sd}></Cards>)
                
                }
            </div>
            

        </div>
    );
};

export default Services;