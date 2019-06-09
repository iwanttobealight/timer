export const declinatWord = (number, words) => {
  const w = words.split("|"),
    n = Math.abs(number * 1);
  return n % 10 == 1 && n % 100 != 11
    ? w[0] + w[1]
    : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)
    ? w[0] + w[2]
    : w[0] + w[3];
};
