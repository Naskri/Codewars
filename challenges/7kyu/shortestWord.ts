export function findShort(s: string): number {
  const wordsArray = s.split(" ");
  const lengthWordsMapped = wordsArray.map((word) => word.length);
  return Math.min(...lengthWordsMapped);
}
