import { canIpress, time } from "../../data/constants";
import { restartGame } from "./restartGame";
import { gameAgain, gameEnd } from "../../data/elements";

export const endGame = () => {
  console.log(time.interval);
  clearInterval(time.interval);
  gameEnd.classList.add("game__end-active");
  gameAgain.addEventListener("click", restartGame);
  canIpress.canPressDown = false;
  canIpress.canPressUp = false;
  canIpress.canPressRight = false;
  canIpress.canPressLeft = false;
};
