export function arrayDiff(a: number[], b: number[]): number[] {
  return a.filter((number) => !b.includes(number));
}
