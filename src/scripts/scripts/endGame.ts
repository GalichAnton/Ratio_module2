import { constants, gameEnd } from "../data/constants";
import { startGame, timer } from "./startGame";

export const endGame = () => {
  clearInterval(timer);
  gameEnd.classList.add("game__end-active");
  gameEnd.addEventListener("click", () => {
    restartGame();
  });
};

const restartGame = () => {
  for (let i = 0; i < constants.size; i++) {
    for (let j = 0; j < constants.size; j++) {
      document.querySelector(`#x${i}y${j}`)!.remove();
    }
  }
  gameEnd.classList.remove("game__end-active");
  startGame();
};
