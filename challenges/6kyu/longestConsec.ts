const generateConsecutiveStrings = (array: string[], k: number) => {
  const consecutiveStrings: string[] = [];
  for (let i = 0; i < array.length - k + 1; i++) {
    consecutiveStrings.push(array.slice(i, k + i).join(""));
  }

  return consecutiveStrings;
};

const calculateTheLongestWordLength = (array: string[]) => {
  const lengthsArray = array.map((word) => word.length);

  return Math.max(...lengthsArray);
};

export function longestConsec(strarr: string[], k: number): string {
  if (strarr.length === 0 || k > strarr.length || k <= 0) return "";

  const consecutiveStrings = generateConsecutiveStrings(strarr, k);
  const longestStringNumber = calculateTheLongestWordLength(consecutiveStrings);
  const longestWord =
    consecutiveStrings.find((word) => word.length === longestStringNumber) ||
    consecutiveStrings[0];
  return longestWord;
}
