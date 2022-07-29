import React from 'react';
import './Login.css';
import homebtn from '../images/login/Vector 1.svg'
import LoginForm from './LoginForm/LoginForm';
const Login = () => {

    

    // function openSidebar() {
    //     console.log(document.querySelector('.sidebarSection').style.display)
    //     document.querySelector('.sidebarSection').style.display = "block"
        
    // }



    
    return (
        <div className='login-page'>

            <div className='companyName'>
                <h1 className='sideHeading'>Globetech <br /> Company Limited</h1>
                <h5 className='sideDescription'>Make yourself digitalized &amp; more effecient </h5>
                <a className='sideReturn' href="/"><img src={homebtn} alt="" /></a>
            </div>

            <div className='sidebarSection'>
                <div className='sidebar'>
                    <h1 className='sideHeading'>Globetech <br /> Company Limited</h1>
                    <h5 className='sideDescription'>Make yourself digitalized &amp; more effecient </h5>
                    <a className='sideReturn' href="/"><img src={homebtn} alt="" /></a>
                </div>
            </div>
            

            <div className='form-section'>
                <LoginForm></LoginForm>
                <footer>Globetech Company Limited</footer>
            </div>
            {/* <div className='login-form'>
            </div> */}
        </div>
    );
};

export default Login;