import { constants } from "../../data/constants";
import { setPosition } from "./setPosition";
import { matrix } from "../gameFunctions/startGame";

export const setCellPlace = (elem: HTMLDivElement) => {
  let x;
  let y;
  let count = 0;
  do {
    x = Math.floor(Math.random() * constants.size);
    y = Math.floor(Math.random() * constants.size);
    if (++count === 50) {
      return;
    }
  } while (matrix[y][x]);
  setPosition(elem, x, y);
  matrix[y][x] = Number(elem.textContent);

  return elem;
};
