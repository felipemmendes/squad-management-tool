import history from '../routes/history';

export const navigateToTeam = (teamId) => {
  history.push(`/team/${teamId}`);
};
