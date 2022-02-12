import { startGame } from "./startGame";
import { gameEnd } from "../../data/elements";
import { clearGame } from "./clearGame";

export const restartGame = () => {
  clearGame();
  gameEnd.classList.remove("game__end-active");
  startGame();
};
