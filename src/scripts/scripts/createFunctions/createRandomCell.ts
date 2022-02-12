import { createCell } from "./createCell";
import { randomNum } from "../randomNum";
import { setCellPlace } from "../setFunctions/setCellPlace";
import { game } from "../../data/elements";

export const createRandomCell = () => {
  const elem = setCellPlace(createCell(randomNum()));
  if (!elem) {
    return;
  }
  game.append(elem);
};
