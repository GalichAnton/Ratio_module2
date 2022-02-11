import { constants, gameStart } from "../data/constants";
import { createRandomCell } from "./createFunctions/createRandomCell";
import { createMatrix } from "./createFunctions/createMatrix";
import { keyListener } from "./moveFunctions/keyListener";
import { checkGameOver } from "./checkFumctions/checkGameOver";
import { setTimer } from "./timer/timer";
export let matrix: Array<number[]> = [];
export let timer: number;
export const startGame = () => {
  matrix = createMatrix(constants.size);
  createRandomCell();
  createRandomCell();
  document.addEventListener("keydown", (e) => {
    keyListener(e);
    checkGameOver();
  });
  timer = setTimer();
  gameStart.style.display = "none";
};
