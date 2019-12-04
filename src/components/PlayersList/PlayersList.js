import React from 'react';
import Player from '../Player/Player';
import './PlayersList.css';

const colors = ['#751D34', '#751D60', '#5E1D75', '#321D75', '#1D5A75', '#1D2E75', '#381D75', '#641D75', '#751D5A', '#024576', '#020B76', '#330276', '#760245', '#6D0276' ];

const PlayersList = (props) => (
   <ul className="PlayersList">
       {props.players.map((player, i) => (
           <Player
               color = {colors[Math.floor(Math.random()*colors.length)]}
               key={i}
               name={player.name}
               score={player.score}
               onPlayerScoreChange={(points) => props.onScoreUpdate(i, points)}
               onPlayerRemove={() => props.onPlayerRemove(i)}
           />)
       )}
   </ul>
);

export default PlayersList;