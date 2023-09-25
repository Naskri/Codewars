const ROMAN_NUMBERS: Record<string, number> = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

export function solution(roman: string): number {
  let sum = 0;
  const romanNumbers = roman.split("").map((roman) => {
    if (roman in ROMAN_NUMBERS) {
      return ROMAN_NUMBERS[roman];
    }
    return 0;
  });

  for (let i = 0; i < romanNumbers.length; i++) {
    if (romanNumbers[i] < romanNumbers[i + 1]) {
      sum += romanNumbers[i + 1] - romanNumbers[i];
      i++;
    } else {
      sum += romanNumbers[i];
    }
  }
  return sum;
}
