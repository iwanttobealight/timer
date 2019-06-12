export const addZero = num => {
  if (`${num}`.length < 2) {
    return `0${num}`;
  }
  return num;
};
