export function squareSum(numbers: number[]): number {
  return numbers.reduce((acc, next) => (acc += next ** 2), 0);
}
