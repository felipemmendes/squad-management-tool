export const getNameInitials = (name) => {
  if (!name) {
    return '';
  }

  const nameArr = name.split(' ');

  if (nameArr.length === 1) {
    return nameArr[0][0] + nameArr[0][1];
  }

  return nameArr[0][0] + nameArr[nameArr.length - 1][0];
};
