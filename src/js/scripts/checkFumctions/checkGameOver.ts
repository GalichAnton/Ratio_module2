import { canIpress, gameEnd } from "../../data/constants";

export const checkGameOver = () => {
  if (
    !canIpress.canPressLeft &&
    !canIpress.canPressRight &&
    !canIpress.canPressDown &&
    !canIpress.canPressUp
  ) {
    gameEnd.classList.add("game__end-active");
  }
};
