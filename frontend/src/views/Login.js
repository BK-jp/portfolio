import 'css/Login.css'
import React, { useEffect, useState } from "react";
import request from 'js/request';
import Inputs from 'js/inputs';
import Footer from './include/Footer';

function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        request.login({
            data: {
                email: email,
                password: password
            }
        });
    };

    useEffect(()=>{
        Inputs();
    }, [])
    
    return (
        <div className='login-page'>
            <form className='form' onSubmit={handleSubmit}>
                Login
                <div className='input-wrap'>
                    <input type="text" inputMode='email' className='text' data-placeholder='email' value={email} onChange={({ target: { value } }) => setEmail(value)}/>
                </div>
                <div className='input-wrap'>
                    <input type="password" inputMode='text' className='text' data-placeholder='password' value={password} onChange={({ target: { value } }) => setPassword(value)}/>
                </div>
                <div className='submit-wrap'>
                    <button className='button c5' type="submit">Login</button>
                </div>
            </form>
            <Footer />
        </div>
    )
}

export default Login;