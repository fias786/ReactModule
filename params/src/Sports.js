import React, { Component } from 'react';
import { Link, Routes, Route } from 'react-router-dom';

class Sports extends Component {
    render = () => {
        return (
            <div id='sports'>
                <ul>
                    <li><Link id='football' to='/football'>Football</Link></li>
                    <li><Link id='cricket' to='/cricket'>Cricket</Link></li>
                    <li><Link id='hockey' to='/hockey'>Hockey</Link></li>
                    <li><Link id='badminton' to='/badminton'>Badminton</Link></li>
                </ul>
            </div>
        )
    }
}

export default Sports;