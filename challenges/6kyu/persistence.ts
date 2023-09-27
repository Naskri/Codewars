export function persistence(num: number): number {
  if (num < 10) return 0;

  let numString = num.toString();
  let times = 0;

  while (numString.length !== 1) {
    const numbers = numString
      .split("")
      .map((potentialNumber) => Number(potentialNumber));
    const sum = numbers.reduce((acc, next) => (acc *= next), 1);
    numString = sum.toString();
    times++;
  }

  return times;
}
