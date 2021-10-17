import React, { useState } from 'react';
import validator from 'validator';
import './Form.css';

const userDetail = {
    email: "shradha23singh@gmail.com",
    password: "Shradha@2310"
}

export default function Form(){
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState({
        email: false,
        password: false
    });


    const onEmailChange = e => {
        setError((prevError) => ({
            ...prevError,
            email: false
        }))
        setEmail(e.target.value);
    }

    const onPasswordChange = e => {
        setError((prevError) => ({
            ...prevError,
            password: false
        }))
        setPassword(e.target.value);
    }

    function handleLogin(e){
        e.preventDefault();
        const error = {};
        if (email === '' || !validator.isEmail(email)){
            error.email = true;
        }

        if (password === ''){
            error.password = true;
        }

        if (error.email || error.password){
            setError(error);
            return;
        }

        setLoading(true);
        setTimeout(()=>{
            if(email === userDetail.email && password === userDetail.password){
                alert('Successfully Logged!');
            } else {
                alert('Email or Password is wrong');
            }
            setLoading(false);
        }, 3000);
        
    }
    return(
        <>
            <h1>Login Form </h1>
            <div className='form-container'>
                <form className='form'>
                    <div className="input-container">
                        <label className="input-label">Email: 
                        <input 
                            type='email' 
                            placeholder='Enter your Email' 
                            className="input-tabs" 
                            onChange={onEmailChange}
                            value={email}
                            required
                            style={{ border: error.email ? '1px solid red' : 'none' }}
                        />
                        </label>
                        {error.email && 
                            <p className="error-message">
                                {email.length  === 0 ? 'Email is Required' : 'Email address is invalid'}
                            </p>
                        }
                    </div>
                    <div className="input-container">
                        <label className="input-label">Password:
                        <input 
                            type='password' 
                            placeholder='Password' 
                            className="input-tabs"
                            onChange={onPasswordChange}
                            value={password}
                            style={{ border: error.password ? '1px solid red' : 'none' }}
                        />
                        </label>
                        {error.password && password.length === 0 && <p className="error-message">Password is Required</p>}
                    </div>
                    <div className="btn-err-container">
                        <button
                            className="btn" 
                            onClick={handleLogin}
                            disabled={loading}
                            style={{backgroundColor: loading ? 'grey': '#007cc0'}}
                        > 
                            {loading ? 'Loading...' : 'Login'}
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}