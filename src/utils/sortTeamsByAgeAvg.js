export const sortTeamsByAgeAvg = (teams) => {
  const sortedArr = [...teams];

  sortedArr.sort((a, b) => parseInt(a.ageAvg, 10) - parseInt(b.ageAvg, 10));

  const highestAgeAvg = sortedArr.slice(-5);
  highestAgeAvg.reverse();

  const lowestAgeAvg = sortedArr.slice(0, 5);

  return {
    highestAgeAvg,
    lowestAgeAvg,
  };
};
