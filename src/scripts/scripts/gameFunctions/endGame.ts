import { canIpress, time } from "../../data/constants";
import { restartGame } from "./restartGame";
import { gameAgain, gameEnd, noThanksBtn } from "../../data/elements";
import { clearGame } from "./clearGame";

export const endGame = () => {
  clearInterval(time.interval);
  gameEnd.classList.add("game__end-active");
  gameAgain.addEventListener("click", restartGame);
  noThanksBtn.addEventListener("click", clearGame);
  canIpress.canPressDown = false;
  canIpress.canPressUp = false;
  canIpress.canPressRight = false;
  canIpress.canPressLeft = false;
};
