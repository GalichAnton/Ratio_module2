import { canIpress, time } from "../../data/constants";
import { gameWin, updateResultBtn } from "../../data/elements";
import { addGameResult } from "./addGameResult";

export const winGame = () => {
  clearInterval(time.interval);
  gameWin.classList.add("game__win-active");
  canIpress.canPressDown = false;
  canIpress.canPressUp = false;
  canIpress.canPressRight = false;
  canIpress.canPressLeft = false;
  updateResultBtn.addEventListener("click", addGameResult);
};
