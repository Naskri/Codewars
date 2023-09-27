// MY SOLUTION - O(n^2)

const calculateSumWithoutChoosed = (
  numbers: number[],
  choosed: [number, number]
) => {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (!choosed.includes(numbers[i])) {
      sum += numbers[i];
    }
  }

  return sum;
};

export function removeNb(n: number): number[][] {
  const numbers = Array.from({ length: n }, (_, i) => i + 1);
  const posibilities = [];

  for (let i = 2; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      const sum = calculateSumWithoutChoosed(numbers, [i, j]);
      const product = i * j;
      if (product === sum) {
        posibilities.push([j, i], [i, j]);
      }
    }
  }

  console.log(posibilities);

  return posibilities;
}

// BETTER SOLUTION - O(n)

export function removeNb(n: number): number[][] {
  const sumOfNumbers = (n * (n + 1)) / 2;
  const posibilities = [];

  for (let i = 1; i <= n; i++) {
    const x = (sumOfNumbers - i) / (i + 1);
    if (Number.isInteger(x) && x <= n) {
      posibilities.push([i, x]);
    }
  }
  return posibilities;
}
