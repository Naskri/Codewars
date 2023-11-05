export class Kata {
  static squareDigits(num: number): number {
    const squaredNumbersArray = num
      .toString()
      .split("")
      .map((num) => Number(num) ** 2);

    return Number(squaredNumbersArray.join(""));
  }
}
