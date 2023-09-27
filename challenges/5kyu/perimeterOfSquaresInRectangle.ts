const generateFibonacciSequence = (max: number) => {
  const fibonacci = [1, 1];
  for (let i = 2; i <= max; i++) {
    fibonacci.push(fibonacci[i - 2] + fibonacci[i - 1]);
  }

  return fibonacci;
};

export const perimeter = (n: number): number => {
  const fibonacci = generateFibonacciSequence(n);

  const sum = fibonacci.reduce((acc, next) => (acc += next), 0);

  const SQUARES_SIDES = 4;

  return sum * SQUARES_SIDES;
};
