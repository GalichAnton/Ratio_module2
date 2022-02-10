import { constants, gameEnd, gameScore, gameStart } from "../data/constants";
import { createRandomCell } from "./createFunctions/createRandomCell";
import { createMatrix } from "./createFunctions/createMatrix";
import { keyListener } from "./moveFunctions/keyListener";
import { checkGameOver } from "./checkFumctions/checkGameOver";
export let matrix: Array<number[]> = [];
export const startGame = () => {
  matrix = createMatrix(constants.size);
  createRandomCell();
  createRandomCell();
  document.addEventListener("keydown", (e) => {
    keyListener(e);
    checkGameOver();
  });
  let res = 0;
  setInterval(() => {
    res += 1;
    gameScore.innerHTML = String(res);
  }, 1000);
  gameStart.style.display = "none";
};

export const restartGame = () => {
  for (let i = 0; i < constants.size; i++) {
    for (let j = 0; j < constants.size; j++) {
      document.querySelector(`#x${i}y${j}`)!.remove();
    }
  }
  startGame();
  gameEnd.classList.remove("game__end-active");
};
