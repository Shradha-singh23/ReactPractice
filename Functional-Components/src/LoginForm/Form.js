import React, { useState } from 'react';
import validator from 'validator';
// import { validPassword } from './Regex';
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
    const [isEmptyEmail, setIsEmptyEmail] = useState(false);
    const [isEmptyPswrd, setIsEmptyPswrd] = useState(false);
    const [isValidEmail, setIsValidEmail] = useState(false);
    // const [isValidPswrd, setIsValidPswrd] = useState(false);
    const [error, setError] = useState(false);
    const [buttonText,setButtonText] = useState('Login');
    const [disable, setDisable] = useState(false);


    const onEmailChange = e => {
        setIsValidEmail(false);
        setIsEmptyEmail(false);
        setButtonText('LOGIN');
        setEmail(e.target.value);
    }

    const onPasswordChange = e => {
        // setIsValidPswrd(false);
        setIsEmptyPswrd(false);
        setButtonText('LOGIN');
        setPassword(e.target.value);
    }

    function loginDetails(e){
        e.preventDefault();
        setButtonText("Loading...")

        if(email === ''){
            setIsEmptyEmail(true);
            
        }

        if(password === ''){
            setIsEmptyPswrd(true);
            return;
        }

        if (!validator.isEmail(email)){
            setIsValidEmail(true);
            return;
        }
        // This validation will be used in Sign up form
        // if (!validPassword.test(password)) {
        //     setIsValidPswrd(true);
        //     return;
        // }
        setTimeout(()=>{
            userDetail.map((detail) => {
                if(email !== detail.email || password !== detail.password){
                    setError(true);     
                } else {
                    setDisable(true);
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
                            style={isValidEmail||isEmptyEmail ? {border: '1px solid red'} : {border:'none'}}
                        />
                        {isEmptyEmail && <p className="error-message">Email is Required </p>}
                        {isValidEmail && <p className="error-message">Email address is invalid </p>}
                    </div>
                    <div className="input-container">
                        <label className="input-label"> Password: </label>
                        <input 
                            type='password' 
                            placeholder='Password' 
                            className="input-tabs"
                            onChange={onPasswordChange}
                            value={password}
                            style={isEmptyPswrd ? {border: '1px solid red'} : {border:'none'}}
                        />
                        {isEmptyPswrd && <p className="error-message">Password is Required </p>}
                        {/* {isValidPswrd && <p className="error-message">Password should be 6 characters long  with a <br />uppercase character, a number and a special character</p>} */}
                    </div>
                    <div className="btn-err-container">
                        {error && <p className="error-message">Email or Password is Wrong </p>}
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