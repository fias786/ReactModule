import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import PlayerData from './PlayerData';


function AboutPlayer () {
    let params = useParams();
    return (
      <div id='about'>
          <p>{PlayerData[params.pid]}</p>
      </div>
    )
}

export default AboutPlayer;