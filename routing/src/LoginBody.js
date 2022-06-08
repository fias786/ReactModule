import { set } from 'local-storage';
import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginHeader from './LoginHeader';
import {userList} from './UserList';
const LoginBody = () =>{
    const [role,setRole] = useState("");
    let navigate = useNavigate();
    const login = (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const user = userList.find((user) => user.username==username);
        if(user){
            if(user.password==password){
                console.log(username,password);
                document.getElementById('errorMessage').innerHTML = ""
                if(user.role=='admin'){
                    setRole("/admin")
                }else{
                    setRole("/user");
                }
            }else{
                document.getElementById('errorMessage').innerHTML = "<p>Invalid password</p>"
            }
        }else{
            document.getElementById('errorMessage').innerHTML = "<p>Username does not exist</p>"
        }
    }

    navigate(String(role));

    return (
        <center>
            <h1>Login</h1>
            <form id="login-form" onSubmit={login}>
                <input type="text" id="username" name="username" placeholder="Username"/><br/>
                <input type="password" id="password" name="password" placeholder="Password"/><br/>
                <div id="errorMessage"></div><br/>
                <button id="Login" type="submit">Login</button>
            </form>
        </center>
    )
}

export default LoginBody;