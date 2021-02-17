export const sortPlayersByPicked = (playersObj) => {
  const totalPicked = Object.values(playersObj).reduce(
    (acc, cur) => (acc += cur),
    0
  );

  const sortedArr = Object.entries(playersObj);

  if (sortedArr.length === 0) {
    return {
      mostPicked: [],
      leastPicked: [],
    };
  }

  sortedArr.sort((a, b) => a[1] - b[1]);

  const mostPicked = sortedArr[sortedArr.length - 1];
  mostPicked.push(`${Math.round((mostPicked[1] / totalPicked) * 100)}%`);

  const leastPicked = sortedArr[0];
  leastPicked.push(`${Math.round((leastPicked[1] / totalPicked) * 100)}%`);

  return {
    mostPicked,
    leastPicked,
  };
};
