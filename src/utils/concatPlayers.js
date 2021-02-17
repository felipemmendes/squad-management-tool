export const concatPlayers = (currPlayers, newPlayers) => {
  if (newPlayers.length === 0) {
    return currPlayers;
  }

  const reduced = newPlayers.reduce((acc, { name }) => {
    return {
      ...acc,
      [name]: (acc[name] || 0) + 1,
    };
  }, currPlayers);

  return reduced;
};

export const concatRemovePlayers = (currPlayers, removePlayers) => {
  if (removePlayers.length === 0) {
    return currPlayers;
  }

  const reduced = removePlayers.reduce((acc, { name }) => {
    if (acc[name] === 1) {
      delete acc[name];
      return acc;
    }

    return {
      ...acc,
      [name]: acc[name] - 1,
    };
  }, currPlayers);

  return reduced;
};
