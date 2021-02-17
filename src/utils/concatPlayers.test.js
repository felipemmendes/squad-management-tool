import { concatPlayers, concatRemovePlayers } from './concatPlayers';

describe('concat players object', () => {
  it('should return an object with players and times they have been picked', () => {
    const players = {
      'John Doe': 1,
      'Jane Doe': 5,
    };

    const newPlayers = [
      { name: 'John Doe' },
      { name: 'Jane Doe' },
      { name: 'Joseph Doe' },
    ];

    expect(concatPlayers(players, newPlayers)).toEqual({
      'John Doe': 2,
      'Jane Doe': 6,
      'Joseph Doe': 1,
    });
  });

  it('should return an the same players when passing and empty array', () => {
    const players = {
      'John Doe': 1,
      'Jane Doe': 5,
    };

    const newPlayers = [];

    expect(concatPlayers(players, newPlayers)).toEqual({
      'John Doe': 1,
      'Jane Doe': 5,
    });
  });
});

describe('concat and remove players', () => {
  it('should decrease the time players are picked', () => {
    const players = {
      'John Doe': 1,
      'Jane Doe': 5,
    };

    const removePlayers = [{ name: 'John Doe' }, { name: 'Jane Doe' }];

    expect(concatRemovePlayers(players, removePlayers)).toEqual({
      'Jane Doe': 4,
    });
  });
});
