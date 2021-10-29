import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleEmailChange,  handleEmailError,  handleLoading,  handlePassChange, handlePasswordError } from "../redux/action";

import './Form.css';

const emailRegex = /\S+@\S+\.\S+/;

export default function Form(){
    const email = useSelector(state => state.email);
    const password = useSelector(state => state.password);
    const correctEmail = useSelector(state => state.userDetail.email);
    const emailError = useSelector(state => state.emailError)
    const passwordError = useSelector(state => state.passwordError)
    const loading = useSelector(state => state.loading)

    const dispatch = useDispatch();

    function handleLogin(e){
        e.preventDefault();
        if (email === '' || !emailRegex.test(email)){
            dispatch(handleEmailError());
        }

        if (password === ''){
            dispatch(handlePasswordError());
        }
        
        if (emailError || passwordError){
            return;
        }

        dispatch(handleLoading(true));
        setTimeout(()=>{
            if(email === correctEmail.email && password === correctEmail.password){
                alert('Successfully Logged!');
            } else {
                alert('Email or Password is wrong');
            }
            dispatch(handleLoading(false));
        }, 3000);
        
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
                            style={{ border: emailError ? '1px solid red' : 'none' }}
                        />
                        </label>
                        {emailError && 
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
                            style={{ border: passwordError ? '1px solid red' : 'none' }}
                        />
                        </label>
                        {passwordError && password.length === 0 && <p className="error-message">Password is Required</p>}
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
                </div>
            </div>
        </>
    )
}