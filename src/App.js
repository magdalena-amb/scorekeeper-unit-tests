import React, { Component } from 'react';
import './App.css';
import PlayersList from './components/PlayersList/PlayersList';
import AddPlayer from './components/AddPlayer/AddPlayer';

class App extends Component {
  constructor() {
    super();
 
    this.state = {
      players: []
    }
  }
  
  onScoreUpdate = (playerIndex, scoreChange) => {
    this.setState({
      players: this.state.players.map((player, index) => {
        if (index === playerIndex) {
          return { ...player, score: player.score + scoreChange };
        }
        return player;
      }).sort((a,b) => b.score - a.score)
    })
  }

  onPlayerAdd = (playerName) => {
    const newPlayer = {
      name: playerName,
      score: 0,
    }
    this.setState({
      players: [...this.state.players, newPlayer ]
    });
  }
  onPlayerRemove = (playerIndex) => {
    const players = this.state.players.filter(
       (player, index) => {
        if (index !== playerIndex){
          return player;
        }   
      }
      )
      this.setState(
        {players}
      )
  }

  render() {
    return (
      <div className="App">
        <AddPlayer onPlayerAdd= {this.onPlayerAdd} />
        <PlayersList players={this.state.players} onScoreUpdate={this.onScoreUpdate} onPlayerRemove={this.onPlayerRemove}/>
      </div>
    );
  }
}

export default App;
