export function isIsogram(str: string): boolean {
  const lowerCaseStr = str.toLowerCase();
  const charsArray = lowerCaseStr.split("");
  const isValidIsogram = charsArray.map(
    (char) => charsArray.indexOf(char) === charsArray.lastIndexOf(char)
  );

  return !isValidIsogram.includes(false);
}
