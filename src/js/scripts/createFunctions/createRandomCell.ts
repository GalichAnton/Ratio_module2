import { createCell } from "./createCell";
import { randomNum } from "../randomNum";
import { game } from "../../data/constants";
import { setCellPlace } from "../setFunctions/setCellPlace";

export const createRandomCell = () => {
  const elem = setCellPlace(createCell(randomNum()));
  if (!elem) {
    return;
  }
  game.append(elem);
};
