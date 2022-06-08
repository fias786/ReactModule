import React from 'react';
import {userList} from './UserList.js';
const UserDisplay = () =>{
    return (
        <center>
            <table id="table">
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>UserName</td>
                        <td>Email</td>
                        <td>MobileNumber</td>
                        <td>Address</td>
                    </tr>
                </thead>
                <tbody>
                    {userList.map((user)=>(user.role=="user" && <tr><td>{user.id}</td><td>{user.name}</td><td>{user.username}</td><td>{user.email}</td><td>{user.mobileNumber}</td><td>{user.address}</td></tr>))}
                </tbody>
            </table>
        </center>
    )
}

export default UserDisplay;