import React, { Component } from 'react';
import {useNavigate} from 'react-router'
import { Link, Route, Routes, Navigate} from 'react-router-dom';
import './App.css';
import Sports from './Sports'
import Players from './Players'
import { Football, Cricket,Badminton, Hockey } from './Sportinfo';
import AboutPlayer from './AboutPlayer';

const App = () =>{
  return (
    <div>
            <div id="header">
                <ul>
                    <li>SPORTS COUNCIL</li>
                    <li><Link id="sports" to="/sports">Sports Category</Link></li>
                    <li><Link id="players" to="/players">Cricket Players Selected</Link></li>
                </ul>
            </div>
      <Routes>
        <Route path='/' element={<Sports/>}></Route>
        <Route path="/sports" element={<Sports/>}>
        </Route>
        <Route path='/players' element={<Players/>}>
          <Route path=':pid' element={<AboutPlayer/>}>
          </Route>
        </Route>
        
        <Route path='/football' element={<Football/>}>
        </Route>
        <Route path='/cricket' element={<Cricket/>}>
        </Route>
        <Route path='/hockey' element={<Hockey/>}>
        </Route>
        <Route path='/badminton' element={<Badminton/>}>
        </Route>
      </Routes>
    </div>
  )
}

export default App;
