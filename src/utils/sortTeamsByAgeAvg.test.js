import { sortTeamsByAgeAvg } from './sortTeamsByAgeAvg';

describe('sort teams by age', () => {
  it('should return highest and lowest age average teams', () => {
    const teams = [
      { ageAvg: '20.0', name: 'test-team-name-1' },
      { ageAvg: '10.0', name: 'test-team-name-2' },
      { ageAvg: '15.0', name: 'test-team-name-3' },
      { ageAvg: '50.0', name: 'test-team-name-4' },
      { ageAvg: '10.0', name: 'test-team-name-5' },
    ];

    expect(sortTeamsByAgeAvg(teams)).toEqual({
      highestAgeAvg: [
        { ageAvg: '50.0', name: 'test-team-name-4' },
        { ageAvg: '20.0', name: 'test-team-name-1' },
        { ageAvg: '15.0', name: 'test-team-name-3' },
        { ageAvg: '10.0', name: 'test-team-name-5' },
        { ageAvg: '10.0', name: 'test-team-name-2' },
      ],
      lowestAgeAvg: [
        { ageAvg: '10.0', name: 'test-team-name-2' },
        { ageAvg: '10.0', name: 'test-team-name-5' },
        { ageAvg: '15.0', name: 'test-team-name-3' },
        { ageAvg: '20.0', name: 'test-team-name-1' },
        { ageAvg: '50.0', name: 'test-team-name-4' },
      ],
    });
  });
});
