import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import PlayersList from './components/PlayersList/PlayersList';
import AddPlayer from './components/AddPlayer/AddPlayer';

it('should update player score and sort players according to score, top score at the top', () => {
  const players = [
    {
    name: 'Adam',
    score: 1,
    },
    {
      name: 'Kunegunda',
      score: 5,
    },
    {
      name: 'Antoś',
      score: 0,
    }
  ];

  const appComponent = shallow(<App/>);
  appComponent.setState({ players });
  const onScoreUpdate = appComponent.find(PlayersList).prop('onScoreUpdate');
  onScoreUpdate(0, 5);
  const playersAfterUpdate = appComponent.state('players');

  expect(playersAfterUpdate[0].score).toEqual(6);
});

it('should add new Player to the state', () => {
  const appComponent = shallow(<App/>);

  const onPlayerAdd = appComponent.find(AddPlayer).prop('onPlayerAdd');
  onPlayerAdd('Anita');

  const players = appComponent.state('players');

  expect(players.length).toEqual(1);
  expect(players[0].name).toEqual('Anita');
  expect(players[0].score).toEqual(0);
});

it('should remove correct Player from the state', () => {
  const players = [
    {
    name: 'Adam',
    score: 1,
    },
    {
      name: 'Kunegunda',
      score: 5,
    },
  ];
  
  const appComponent = shallow(<App/>);
  appComponent.setState({ players });

  const onPlayerRemove = appComponent.find(PlayersList).prop('onPlayerRemove');
  onPlayerRemove(0);
  const playersAfterUpdate = appComponent.state('players');

  expect(playersAfterUpdate.length).toEqual(1);
  expect(playersAfterUpdate[0].name).toEqual('Kunegunda');
});



