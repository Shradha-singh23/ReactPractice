import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleEmailChange,  handleLogin, handlePassChange } from "../redux/action";

import './Form.css';

// const emailRegex = /\S+@\S+\.\S+/;

export default function Form(){
    const email = useSelector(state => state.email);
    const password = useSelector(state => state.password);
    const error = useSelector(state => state.error);
    const loginSuccess = useSelector(state => state.loginSuccess);
    const loginFaliure = useSelector(state => state.loginFaliure);

    const dispatch = useDispatch();

    function handleLoginButton(e){
        e.preventDefault();
        dispatch(handleLogin());
    }
    return(
        <>
            <h1>Login Form </h1>
            <div className='form-container'>
                <div className='form'>
                    <div className="input-container">
                        <label className="input-label">Email: 
                        <input 
                            type='email' 
                            placeholder='Enter your Email' 
                            className="input-tabs" 
                            onChange={(e) => dispatch(handleEmailChange(e))}
                            value={email}
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
                            onChange={(e) => dispatch(handlePassChange(e))}
                            value={password}
                            style={{ border: error.password ? '1px solid red' : 'none' }}
                        />
                        </label>
                        {error.password && password.length === 0 && <p className="error-message">Password is Required</p>}
                    </div>
                    <div className="btn-err-container">
                        <button
                            className="btn" 
                            onClick={handleLoginButton}
                            style={{backgroundColor: '#007cc0'}}
                        > 
                            Login
                        </button>
                        {loginSuccess && <p style={{color:'green'}}>Login Successfully</p>}
                        {loginFaliure && <p style={{color:'red'}}>Please check your Email and Password</p>}
                    </div>
                </div>
            </div>
        </>
    )
}