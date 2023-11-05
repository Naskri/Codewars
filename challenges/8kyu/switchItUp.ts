export function switchItUp(intNumber: number): string {
  let description = "";

  switch (intNumber) {
    case 0:
      description += "Zero";
      break;
    case 1:
      description += "One";
      break;
    case 2:
      description += "Two";
      break;
    case 3:
      description += "Three";
      break;
    case 4:
      description += "Four";
      break;
    case 5:
      description += "Five";
      break;
    case 6:
      description += "Six";
      break;
    case 7:
      description += "Seven";
      break;
    case 8:
      description += "Eight";
      break;
    case 9:
      description += "Nine";
      break;
  }

  return description;
}
