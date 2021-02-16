import { navigateToTeam } from './navigateToTeam';
import history from '../routes/history';

describe('navigate to team page', () => {
  jest.spyOn(history, 'push').mockImplementation(jest.fn(() => jest.fn()));
  it('should navigate to team page', () => {
    navigateToTeam(1);

    expect(history.push).toHaveBeenCalledWith(`/team/${1}`);
  });
});
