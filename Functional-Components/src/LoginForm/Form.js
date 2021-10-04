import React, { useState } from 'react';
import validator from 'validator';
import { validPassword } from './Regex';
import './Form.css';

const userDetail = [
    {
        email: "shradha23singh@gmail.com",
        password: "Shradha@2310"
    }
]

export default function Form(){
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(false);
    const [isValidPswrd, setIsValidPswrd] = useState(false);
    const [error, setError] = useState(false);
    const [buttonText,setButtonText] = useState('Login');
    const [disable, setDisable] = useState(false);
    const onEmailChange = e => {
        setEmail(e.target.value);
    }

    const onPasswordChange = e => {
        setPassword(e.target.value);
    }

    function loginDetails(e){
        e.preventDefault();
        setDisable(true);
        setButtonText("Loading...")
        if (!validator.isEmail(email)){
            setIsValidEmail(true);
        }
        if (!validPassword.test(password)) {
            setIsValidPswrd(true);
        }
        setTimeout(()=>{
            userDetail.map((detail) => {
                if(email !== detail.email || password !== detail.password){
                    setError(true);     
                } else {
                    alert('Successfully Logged!');
                }
                return detail;
            })
        },3000);
        
    }
    return(
        <>
            <h1> Login Form </h1>
            <div className='form-container'>
                <form className='form'>
                    <div className="input-container">
                        <label className="input-label"> Email: </label>
                        
                        <input 
                            type='email' 
                            placeholder='Enter your Email' 
                            className="input-tabs" 
                            onChange={onEmailChange}
                            value={email}
                            require
                        />
                        {isValidEmail && <span className="error-message">Enter Valid Email </span>}
                    </div>
                    <div className="input-container">
                        <label className="input-label"> Password: </label>
                        <input 
                            type='password' 
                            placeholder='Password' 
                            className="input-tabs"
                            onChange={onPasswordChange}
                            value={password}
                        />
                        {isValidPswrd && <span className="error-message">Enter Valid Password </span>}
                    </div>
                    <div className="btn-err-container">
                        {error && <span className="error-message">Email or Password is Wrong </span>}
                        <button 
                            className="btn" 
                            onClick={loginDetails}
                            disabled={disable}
                            style={disable ? {background:'grey'} : {background: '#007cc0'}}
                        > 
                            {buttonText}
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}