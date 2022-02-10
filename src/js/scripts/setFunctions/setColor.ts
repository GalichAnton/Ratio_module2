import { constants } from "../../data/constants";

export const setColor = (num: number): string | undefined => {
  switch (num) {
    case 2:
      return constants.colors[0];
    case 4:
      return constants.colors[1];
    case 8:
      return constants.colors[2];
    case 16:
      return constants.colors[3];
    case 32:
      return constants.colors[4];
    case 64:
      return constants.colors[5];
    case 256:
      return constants.colors[6];
    case 512:
      return constants.colors[7];
    case 1024:
      return constants.colors[8];
    case 2048:
      return constants.colors[9];
    default:
      return;
  }
};
