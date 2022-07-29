import React, { useState } from 'react';
import './LoginForm.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons'

const LoginForm = () => {

    const [hidden, setHidden] = useState(<FontAwesomeIcon icon={faEye} size="lg" className="eye"/>)

    
    function myFunction() {
        var x = document.getElementById("hidden");
        if (x.type === "password") {
          x.type = "text";
          setHidden(<FontAwesomeIcon  icon={faEye} size="lg" className="eye"/>) 
        } else {
          x.type = "password";
          setHidden(<FontAwesomeIcon  icon={faEyeSlash} size="lg" className="eye"/>)   
        }
      }
      


    return (
        <div className="form">
            <form className="login-form">
                
                <h1>Welcome</h1>
                <p>Sign in to your account</p>
                <input type="text" placeholder="username" />
                <input type="password" placeholder="password" id="hidden"/>
                <span className='togglePass' onClick={() => myFunction()}>{hidden}</span>
                <button>login</button>
            </form>
        </div>
    );
};

export default LoginForm;