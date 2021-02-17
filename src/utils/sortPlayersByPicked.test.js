import { sortPlayersByPicked } from './sortPlayersByPicked';

describe('sort players by age', () => {
  it('should return most and least picked player', () => {
    const players = { 'John Doe': 2, 'Jane Doe': 5, 'Joseph Doe': 1 };

    expect(sortPlayersByPicked(players)).toEqual({
      mostPicked: ['Jane Doe', 5, '63%'],
      leastPicked: ['Joseph Doe', 1, '13%'],
    });
  });
  it('should return empty arrays when players object is empty', () => {
    const players = {};

    expect(sortPlayersByPicked(players)).toEqual({
      mostPicked: [],
      leastPicked: [],
    });
  });
});
