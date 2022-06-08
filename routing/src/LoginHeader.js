import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginHeader = () => {
    const navigate = useNavigate();
    const logout = ()=>{
        navigate("/")
    }

    return (
        <header>
            <ul>
                <li>Tutorial</li>
                <li><div id="user-logo" onClick={logout}><img width="25px" src={require('./images/user.png')}/></div></li>
            </ul>
        </header>
    )
}

export default LoginHeader;