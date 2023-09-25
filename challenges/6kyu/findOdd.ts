const calculateNumbersFrequency = (numbers: number[]) => {
  const frequency: Record<number, number> = {};

  numbers.forEach((num) => {
    if (frequency[num]) {
      frequency[num]++;
    } else {
      frequency[num] = 1;
    }
  });

  return frequency;
};

export const findOdd = (xs: number[]): number => {
  const frequency = calculateNumbersFrequency(xs);

  let oddInt;

  for (const [key, value] of Object.entries(frequency)) {
    if (value % 2 !== 0) {
      oddInt = key;
    }
  }

  return Number(oddInt);
};
