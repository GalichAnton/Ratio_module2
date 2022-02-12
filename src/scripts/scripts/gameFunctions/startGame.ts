import { canIpress, constants, time } from "../../data/constants";
import { createRandomCell } from "../createFunctions/createRandomCell";
import { createMatrix } from "../createFunctions/createMatrix";
import { keyListener } from "../moveFunctions/keyListener";
import { checkGameOver } from "../checkFumctions/checkGameOver";
import { timer } from "../timer/timer";
import { gameStart } from "../../data/elements";
export let matrix: Array<number[]> = [];
export const startGame = () => {
  matrix = createMatrix(constants.size);
  createRandomCell();
  createRandomCell();
  document.addEventListener("keydown", (e) => {
    keyListener(e);
    checkGameOver();
  });
  time.interval = setInterval(timer, 10);
  gameStart.style.display = "none";
  canIpress.canPressDown = true;
  canIpress.canPressUp = true;
  canIpress.canPressRight = true;
  canIpress.canPressLeft = true;
};
