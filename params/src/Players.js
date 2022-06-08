import React, { Component } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import PlayerData from './PlayerData';

export const Players = () => {
    const players = Object.keys(PlayerData);
    return (
      <div id='players'>
        <ul>
          {players.map((player)=>(<li key={player}><NavLink to={`./${player}`} id={player}>{player}</NavLink></li>))}
        </ul>
        <Outlet />
      </div>
    )
}

export default Players;