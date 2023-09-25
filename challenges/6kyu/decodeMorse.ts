import { MORSE_CODE } from "./preloaded";
export function decodeMorse(morseCode: string): string {
  const splittedArray = morseCode.trim().replace(/   /g, "  ").split(" ");
  const decodedMorseArray = splittedArray.map((char) =>
    char === "" ? " " : MORSE_CODE[char]
  );
  const decodeMorseCode = decodedMorseArray.join("");
  return decodeMorseCode;
}
