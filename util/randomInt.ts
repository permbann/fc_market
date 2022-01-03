export const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
};

export const getRandomSet = (
    maxRoll: number,
    resultCount: number,
): number[] => {
  if (resultCount > maxRoll) {
    return [];
  }
  const rolls = Array(resultCount - 1)
      .fill(1)
      .map(() => getRandomInt(1, maxRoll + 1));
  const rollsSet = new Set(rolls);
  if (rolls.length === rollsSet.size) {
    return rolls;
  }
  return getRandomSet(maxRoll, resultCount);
};
