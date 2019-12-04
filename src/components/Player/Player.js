import React, { Component } from 'react';
import './Player.css';
import { FaTrash } from 'react-icons/fa';



class Player extends Component {
  render(){
    const {color, name, score, onPlayerScoreChange, onPlayerRemove} = this.props;
    let style = {
      backgroundColor: color
    }
    return (
      <li className="Player" style={style}>
        <span className="Player__name">{name}</span>
        <span className="Player__score">{score}</span>
        <span className="Player__button" onClick={() => onPlayerScoreChange(1)} >+</span>
        <span className="Player__button" onClick={() => onPlayerScoreChange(-1)} >-</span>
        <span className="Player__button" onClick={onPlayerRemove} > <FaTrash/> </span>
      </li>
    )
  }
}

export default Player;